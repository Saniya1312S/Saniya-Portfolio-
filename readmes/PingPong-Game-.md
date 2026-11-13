# Pong Game on FPGA

## Date

12/14/2023

## Developers

* Adegbesan Dolapo
* Mehreen Salwa
* Jagjot Singh Saini

## Project Description

This project presents an FPGA-based Pong game, taking inspiration from the iconic arcade game. The game, which uses example code provided by Mr. Kent, is developed to offer an interactive and engaging experience in hardware gaming. Unique to this version are two sliders, with one controlled using `btnL` and `btnR`, and the second slider operated with `btnD` (Down) and `btnU` (Up) buttons on the FPGA board. The aim is to manipulate these sliders to deflect a bouncing box around the screen. Hits are tallied and displayed on a 7-segment LED display in hexadecimal format, adding a competitive layer to the game.

## Step by Step Goals

* Shrink the bouncing box to a more challenging size.
* Introduce an additional slider to the game interface.
* Enable control of the first slider using `btnL` (Left) and `btnR` (Right).
* Implement a collision mechanism to ensure the box bounces off the sliders.
* Introduce a `bounce_counter` to track collisions between the sliders and the box.
* Utilize the 7-segment LED display to showcase the `bounce_counter` value in hexadecimal.
* Introduce a second slider to the game interfacer to complete the game
* Enable control of the second slider using `btnD` (Down) and `btnU` (Up).

## Equipment Used

* VHDL code
* FPGA board (BASYS 3 by Digilent  )with VGA output
* Control buttons: Left (`btnL`), Right (`btnR`), Down (`btnD`), Up (`btnU`)
* 7-segment LED display
* Monitor with VGA input

## How to Use

To play the game:

1. Please clone the folder from this github repo
2. Run `./gen.sh` in the terminal to load the game onto the FPGA board.
3. Connect the FPGA board to your computer via USB for programming and data transfer.
4. Attach the FPGA board to a monitor using a VGA cable for game display.
5. Use `btnL` and `btnR` to move the first slider; `btnD` and `btnU` to control the second slider.
6. The goal is to hit the bouncing box with the sliders. Each successful hit increases your score, displayed on the 7-segment LED.

## Assumptions

* Users are familiar with basic FPGA operations and Vivado.
* Necessary hardware, including an FPGA board with VGA output and a monitor, is available
* The user would not press the button in an irregular manner because it might affect the way the board sends the  signal
* The `./gen.sh` script facilitates easy game loading and is compatible with the user's system.

## Hardware Diagram

The diagram below shows the design of the FPGA-based Pong game, highlighting connections between the FPGA board, control buttons (`btnL`, `btnR`, `btnD`, `btnU`), and the 7-segment display. This schematic is crafted using structural VHDL and can be visualized in Vivado.

#### ![1702627981043](image/Myreadme/1702627981043.png)Entity explained

##### Sliding_bar_inst

![1702628049559](image/Myreadme/1702628049559.png)

This module represents the first sliding bar in the Pong game,  the  player's first (lower) paddle.

* **Inputs** :
* `btnL` and `btnR`: Buttons to control the left and right movement of the slider.
* `clk`: Clock signal to synchronize the movement of the slider.
* **Outputs** :
* `slide_bar_position[31:0]`: The position of the slider in a 32-bit wide signal, to control where it appears on the screen.

##### second_sliding_bar_inst

![1702628077248](image/Myreadme/1702628077248.png)

This is the module for the second sliding bar, which is another player's second( upper) paddle .

* **Inputs** :
* `btnD` and `btnU`: Buttons to control the up and down movement of this slider.
* `clk`: Same clock signal for synchronization.
* **Outputs** :
* `second_slide_bar_position[31:0]`: The 32-bit wide signal indicating the position of the second slider.

##### vga_sync_unit

![1702628185839](image/Myreadme/1702628185839.png)

This module is responsible for generating the synchronization signals for a VGA display.

* **Inputs** :
* `clk`: Clock signal to synchronize the VGA signal.
* `reset`: A signal to reset the synchronization process.

 **Outputs** :* `hsync` and `vsync`: Horizontal and vertical sync signals for the VGA display.

* `pixel_x[9:0]` and `pixel_y[9:0]`: 10-bit signals representing the current pixel coordinates.
* `video_on`: A signal to indicate that video output should be displayed.
* `p_tick`: A tick signal that might be used to time the pixel updates.

##### Box_gen_unit

![1702628222645](image/Myreadme/1702628222645.png)

This module generates the bouncing box that players interact with.

* **Inputs** :
* `clk`: Clock signal for synchronization.
* `pixel_tick`: A signal indicating when to update the position of the box.
* **Outputs** :
* `box_x[9:0]`, `box_y[9:0]`: The current x and y coordinates of the box in 10-bit wide signals.
* `blue[3:0]`, `green[3:0]`, `red[3:0]`: 4-bit signals for the color of the box in the RGB color space.
* `bounce_count[31:0]`: A 32-bit signal keeping track of the number of times the box has bounced off the sliders.

##### x7eg_inst

![1702628256279](image/Myreadme/1702628256279.png)

 This module handles the interfacing with a 7-segment LED display, it shows  the bounce count as it updates .

* **Inputs** :
* `CLK100MHZ`: A 100 MHz clock signal for timing.
* `bounce_count[31:0]`: The bounce count from the `box_gen_unit`.
* **Outputs** :
* `an[3:0]`: The 4-bit signal to control which digit is active on the 7-segment display.
* `dp`: Decimal point control.
* `seg[6:0]`: The 7-bit signal controlling the individual segments of the 7-segment display.

The rest of the signals like `Hsync`, `Vsync`, `LED[15:0]`, `dp`, and `vgaRed[3:0]`, `vgaGreen[3:0]`, `vgaBlue[3:0]` are standard for controlling VGA displays and indicating statuses via LEDs on the FPGA board.

## Works Cited

* Example Code of the 7segdisplay.vhd provided by Dr.Kent
* Example Code of the bouncing_box. vhd provided by Dr.Kent
* Example Code of the box_gen.vhd provided by Dr. Kent
