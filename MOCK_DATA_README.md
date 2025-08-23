# Mock Data System for Yale Printing Management System

This document explains how to use the mock data system for demonstration and development purposes.

## Overview

The mock data system provides realistic sample data for:
- **Clients** - Various companies and industries
- **Materials** - Different types of printing materials (paper, cardboard, fabric, plastic)
- **Pantone Colors** - Standard color codes used in printing
- **Printing Methods** - Various printing techniques with cost multipliers
- **Finishing Methods** - Post-printing processes and treatments

## Files Structure

```
app/
├── data/
│   └── mockData.ts          # Main mock data definitions and interfaces
├── utils/
│   └── demoDataPopulator.ts # Utilities to populate forms with demo data
└── pages/
    ├── docket.vue           # Job docket form with demo data population
    └── config.vue           # Configuration page to manage clients and materials
```

## Features

### 1. Mock Data Types

#### Clients
- 6 sample clients across different industries (Technology, Food & Beverage, Fashion, Healthcare, Finance, Education)
- Each client includes company details, contact information, and industry classification

#### Materials
- **Paper**: Premium Gloss, Matte Coated, Recycled Kraft, Photo Quality
- **Cardboard**: Corrugated, Premium Card Stock
- **Fabric**: Cotton Canvas, Polyester Banner
- **Plastic**: PVC Vinyl, Polypropylene
- Each material includes weight, size, color, finish, supplier, and cost information

#### Pantone Colors
- Standard PMS color codes with hex values
- Categories: Red, Blue, Green, Yellow, Gray, Black, White

#### Printing Methods
- Digital Printing, Offset Lithography, Screen Printing, UV Printing, Dye Sublimation
- Each method includes suitability for different materials and cost multipliers

#### Finishing Methods
- Lamination, Foil Stamping, Embossing, Die Cutting, Varnishing, Spot UV
- Each method includes suitability for different materials and cost multipliers

### 2. Demo Data Population

The system includes utilities to automatically populate forms with realistic data:

- **`populateWithDemoData()`** - Fills the entire docket form with realistic data
- **`populateClientSection()`** - Populates only the client information section
- **`populateMaterialsSection()`** - Populates only the materials section
- **`generatePurchaseOrder()`** - Creates realistic PO numbers
- **`generateJobTitle()`** - Generates professional job titles
- **`generateSizes()`** - Provides standard printing sizes
- **`generateQuantity()`** - Suggests realistic production quantities

### 3. Configuration Management

The configuration page (`/config`) allows users to:
- View all existing clients and materials
- Add new clients and materials
- Edit existing entries (placeholder for future implementation)
- Delete entries
- View Pantone colors, printing methods, and finishing methods

## Usage

### In the Docket Form

1. Navigate to `/docket`
2. Click the **"Populate Demo"** button to fill the entire form with realistic data
3. The form will be populated with:
   - Random client selection
   - Realistic job details
   - Appropriate materials based on job type
   - Suitable printing and finishing methods
   - Professional descriptions and specifications

### In the Configuration Page

1. Navigate to `/config` from the docket page
2. View existing clients and materials
3. Add new entries using the "Add Client" or "Add Material" buttons
4. Manage existing entries with edit/delete options

### Programmatically

```typescript
import { populateWithDemoData, getRandomClient } from '~/utils/demoDataPopulator'

// Populate entire form
const demoData = populateWithDemoData()

// Get a random client
const client = getRandomClient()

// Generate specific data
const poNumber = generatePurchaseOrder()
const jobTitle = generateJobTitle()
```

## Customization

### Adding New Mock Data

1. **New Client**: Add to `mockClients` array in `mockData.ts`
2. **New Material**: Add to `mockMaterials` array with proper type classification
3. **New Color**: Add to `mockPantoneColors` array
4. **New Method**: Add to `mockPrintingMethods` or `mockFinishingMethods` arrays

### Modifying Data Generation

Edit the utility functions in `demoDataPopulator.ts` to:
- Change the range of quantities generated
- Modify job title patterns
- Adjust size options
- Update description templates

## Benefits

1. **Realistic Demos**: Forms look professional and complete
2. **Quick Testing**: No need to manually enter data for testing
3. **Consistent Data**: Standardized sample data across the application
4. **Easy Customization**: Simple to modify and extend
5. **Professional Appearance**: Makes the application look production-ready

## Future Enhancements

- **Data Persistence**: Save mock data to localStorage or backend
- **Import/Export**: CSV or JSON import/export functionality
- **Data Validation**: Ensure mock data follows business rules
- **Dynamic Generation**: More sophisticated data generation algorithms
- **Industry-Specific Data**: Specialized data sets for different industries

## Notes

- All mock data is stored in memory and will reset on page refresh
- In a production environment, this would be replaced with real API calls
- The system is designed to be easily replaceable with real data sources
- Cost calculations and business logic are simplified for demo purposes
