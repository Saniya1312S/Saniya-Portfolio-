# SafePass - Emergency Safety App

A comprehensive safety application built with React, TypeScript, Android,  and Capacitor to help users stay safe in emergency situations.

## 🚀 Features

- **Secure Vault**: Store important documents and emergency contacts
- **Interactive Maps**: View community alerts and safety information
- **Emergency Broadcasting**: Send alerts to pre-configured contacts
- **Resource Directory**: Access local emergency resources
- **PIN Lock Protection**: 10-digit PIN security system
- **Panic Button**: Quick access emergency features
- **Location Services**: GPS-based location sharing

## 📋 System Requirements

### Prerequisites
- **Node.js**: Version 18.0 or higher
- **Capacitor by Ionic**
- **npm**: Version 8.0 or higher (comes with Node.js)
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge
- **Operating System**: Windows 10+, macOS 10.15+, or Linux

### Hardware Requirements
- **RAM**: Minimum 4GB, Recommended 8GB
- **Storage**: At least 1GB free space
- **Internet Connection**: Required for maps and external resources
- **GPS/Location Services**: Optional but recommended for location features

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/safepass-2.git
cd safepass-2
```

### 2. Install Dependencies
```bash
npm install
npm install capacitor
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 📦 Key Dependencies

### Core Framework
- **React**: ^18.3.1 - UI library
- **TypeScript**: Latest - Type safety
- **Vite**: Latest - Build tool and dev server

### UI Components
- **@radix-ui/react-***: Modern accessible components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **shadcn/ui**: Component library

### Maps & Location
- **Leaflet**: ^1.9.4 - Interactive maps
- **React Leaflet**: ^5.0.0 - React integration for Leaflet
- **@types/leaflet**: ^1.9.20 - TypeScript types

### Form Handling
- **React Hook Form**: ^7.53.0 - Form management
- **@hookform/resolvers**: ^3.9.0 - Form validation
- **Zod**: ^3.23.8 - Schema validation

### State Management & Data
- **@tanstack/react-query**: ^5.56.2 - Server state management
- **React Router DOM**: ^6.26.2 - Client-side routing

### Mobile Support (Capacitor)
- **@capacitor/core**: ^7.4.2 - Native bridge
- **@capacitor/cli**: ^7.4.2 - CLI tools
- **@capacitor/android**: ^7.4.2 - Android platform
- **@capacitor/ios**: ^7.4.2 - iOS platform

## 🔧 Development Setup

### Environment Setup
1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/)
2. **Verify Installation**:
   ```bash
   node --version
   npm --version
   ```

### IDE Recommendations
- **Visual Studio Code** with extensions:
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets
  - Prettier - Code formatter

### Browser Development Tools
- Enable location services for testing GPS features
- Use browser developer tools for debugging
- Install React Developer Tools extension

## 📱 Mobile Development (Optional)

### For Android Development
- **Android Studio**: Latest version
- **Java JDK**: Version 11 or higher
- **Android SDK**: API level 24 or higher

### For iOS Development (macOS only)
- **Xcode**: Latest version
- **iOS Simulator**: Included with Xcode
- **CocoaPods**: Latest version

### Capacitor Mobile Setup
```bash
# Add platforms
npx cap add android
npx cap add ios

# Sync project
npx cap sync

# Run on device/emulator
npx cap run android
npx cap run ios
```

## 🌐 Browser Permissions Required

### Geolocation
- Required for "Find Me" functionality
- Used for location-based alerts
- Enable in browser settings if blocked

### Local Storage
- Required for PIN security
- Used for storing user preferences
- Automatically available in modern browsers

## 🚨 Security Features

### PIN Lock System
- 10-digit PIN protection
- Default PIN: `0000000000` (change immediately)
- Automatic lockout after failed attempts
- Configurable through Settings

### Data Protection
- Local storage encryption for sensitive data
- Secure document storage
- Emergency contact protection

## 📊 Performance Optimization

### Development
- Hot module replacement for fast development
- TypeScript for compile-time error checking
- ESLint for code quality

### Production
- Code splitting and lazy loading
- Optimized bundle sizes
- Progressive Web App features

## 🔍 Troubleshooting

### Common Issues

1. **Location Not Working**
   - Check browser permissions
   - Ensure HTTPS connection
   - Try refreshing the page

2. **Maps Not Loading**
   - Check internet connection
   - Verify Leaflet CSS is loaded
   - Clear browser cache

3. **Build Errors**
   - Delete `node_modules` and reinstall
   - Check Node.js version compatibility
   - Verify all dependencies are installed

### Development Commands
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Type checking
npx tsc --noEmit

# Clear cache
rm -rf .vite
```

## 📞 Support & Documentation

### Lovable Project
- **Project URL**: https://lovable.dev/projects/a66e540c-0da1-4405-b533-e7a940fc9ecf
- **Documentation**: [Lovable Docs](https://docs.lovable.dev/)
- **Custom Domain Setup**: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain)

### Deployment
- **Quick Deploy**: Open [Lovable](https://lovable.dev/projects/a66e540c-0da1-4405-b533-e7a940fc9ecf) → Share → Publish
- **Custom Domain**: Project → Settings → Domains → Connect Domain

## 🔄 Updates

To update the project:
```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Sync Capacitor (if using mobile features)
npx cap sync
```

---

**Note**: This application handles sensitive safety information. Always test thoroughly before deploying in production environments and ensure all security features are properly configured.
