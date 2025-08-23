// Demo Data Populator for Yale Printing Management System
// This utility helps populate forms with realistic data for demonstration purposes

import { 
  mockPantoneColors, 
  getRandomClient,
  getRandomMaterial,
  getPrintingMethodsByMaterial,
  getFinishingMethodsByMaterial
} from '~/data/mockData'

export interface DocketFormData {
  client: string
  purchaseOrder: string
  jobTitle: string
  quantity: string
  description: string
  createdOn: string
  dueDate: string
  openSize: string
  finalSize: string
  coverMaterial: string
  coverColors: string
  coverPantone: string
  coverPrinting: string
  coverFinishing: string
  innerMaterial: string
  innerColors: string
  innerPantone: string
  innerPrinting: string
  pageCount: string
  numbering: string
  copyChange: string
  materialSpec: string
  cutToSize: string
  cuttingQuantity: string
}

// Generate a realistic purchase order number
export const generatePurchaseOrder = (): string => {
  const year = new Date().getFullYear()
  const month = String(new Date().getMonth() + 1).padStart(2, '0')
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `PO-${year}${month}-${random}`
}

// Generate a realistic job title
export const generateJobTitle = (): string => {
  const jobTypes = [
    'Business Cards',
    'Brochure',
    'Flyer',
    'Poster',
    'Banner',
    'Catalog',
    'Newsletter',
    'Invitation',
    'Menu',
    'Packaging',
    'Labels',
    'Stickers',
    'Booklet',
    'Manual',
    'Report'
  ]
  
  const adjectives = [
    'Premium',
    'Corporate',
    'Marketing',
    'Product',
    'Event',
    'Seasonal',
    'Limited Edition',
    'Professional',
    'Creative',
    'Standard'
  ]
  
  const jobType = jobTypes[Math.floor(Math.random() * jobTypes.length)]
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  
  return `${adjective} ${jobType}`
}

// Generate realistic sizes
export const generateSizes = (): { openSize: string, finalSize: string } => {
  const sizes = [
    { open: 'A4 (210 x 297mm)', final: 'A4 (210 x 297mm)' },
    { open: 'A3 (297 x 420mm)', final: 'A4 (210 x 297mm)' },
    { open: 'A5 (148 x 210mm)', final: 'A5 (148 x 210mm)' },
    { open: 'A2 (420 x 594mm)', final: 'A3 (297 x 420mm)' },
    { open: 'Custom (200 x 300mm)', final: 'Custom (200 x 300mm)' },
    { open: 'Letter (8.5 x 11")', final: 'Letter (8.5 x 11")' },
    { open: 'Legal (8.5 x 14")', final: 'Legal (8.5 x 14")' }
  ]
  
  return sizes[Math.floor(Math.random() * sizes.length)]
}

// Generate realistic quantities
export const generateQuantity = (): string => {
  const quantities = [
    '100', '250', '500', '1000', '2000', '5000', '10000'
  ]
  return quantities[Math.floor(Math.random() * quantities.length)]
}

// Generate realistic page counts
export const generatePageCount = (): string => {
  const pageCounts = [
    '1', '2', '4', '8', '12', '16', '20', '24', '32', '48', '64'
  ]
  return pageCounts[Math.floor(Math.random() * pageCounts.length)]
}

// Generate realistic descriptions
export const generateDescription = (jobTitle: string): string => {
  const descriptions = [
    `Professional ${jobTitle.toLowerCase()} with high-quality printing and finishing.`,
    `Corporate ${jobTitle.toLowerCase()} featuring modern design and premium materials.`,
    `Marketing ${jobTitle.toLowerCase()} designed for maximum impact and durability.`,
    `Custom ${jobTitle.toLowerCase()} with attention to detail and quality craftsmanship.`,
    `Premium ${jobTitle.toLowerCase()} using the finest materials and printing techniques.`
  ]
  
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}

// Generate realistic dates
export const generateDates = (): { createdOn: string, dueDate: string } => {
  const today = new Date()
  const createdOn = today.toISOString().split('T')[0]
  
  // Due date between 1-4 weeks from today
  const dueDate = new Date(today)
  dueDate.setDate(today.getDate() + Math.floor(Math.random() * 28) + 7)
  
  return {
    createdOn,
    dueDate: dueDate.toISOString().split('T')[0]
  }
}

// Populate form with demo data
export const populateWithDemoData = (): DocketFormData => {
  const client = getRandomClient()
  const coverMaterial = getRandomMaterial()
  const innerMaterial = getRandomMaterial()
  const jobTitle = generateJobTitle()
  const sizes = generateSizes()
  const dates = generateDates()
  
  // Get suitable printing and finishing methods for the materials
  const coverPrintingMethods = getPrintingMethodsByMaterial(coverMaterial.type)
  const coverFinishingMethods = getFinishingMethodsByMaterial(coverMaterial.type)
  const innerPrintingMethods = getPrintingMethodsByMaterial(innerMaterial.type)
  
  const coverPrinting = coverPrintingMethods.length > 0 
    ? coverPrintingMethods[Math.floor(Math.random() * coverPrintingMethods.length)].name 
    : 'Digital Printing'
    
  const coverFinishing = coverFinishingMethods.length > 0 
    ? coverFinishingMethods[Math.floor(Math.random() * coverFinishingMethods.length)].name 
    : 'Lamination'
    
  const innerPrinting = innerPrintingMethods.length > 0 
    ? innerPrintingMethods[Math.floor(Math.random() * innerPrintingMethods.length)].name 
    : 'Digital Printing'
  
  // Get random pantone colors
  const coverPantone = mockPantoneColors[Math.floor(Math.random() * mockPantoneColors.length)].code
  const innerPantone = mockPantoneColors[Math.floor(Math.random() * mockPantoneColors.length)].code
  
  return {
    client: client.company,
    purchaseOrder: generatePurchaseOrder(),
    jobTitle: jobTitle,
    quantity: generateQuantity(),
    description: generateDescription(jobTitle),
    createdOn: dates.createdOn,
    dueDate: dates.dueDate,
    openSize: sizes.openSize,
    finalSize: sizes.finalSize,
    coverMaterial: coverMaterial.name,
    coverColors: String(Math.floor(Math.random() * 4) + 1),
    coverPantone: coverPantone,
    coverPrinting: coverPrinting,
    coverFinishing: coverFinishing,
    innerMaterial: innerMaterial.name,
    innerColors: String(Math.floor(Math.random() * 2) + 1),
    innerPantone: innerPantone,
    innerPrinting: innerPrinting,
    pageCount: generatePageCount(),
    numbering: Math.random() > 0.5 ? 'Sequential numbering on bottom right' : '',
    copyChange: Math.random() > 0.7 ? 'Variable data printing required' : '',
    materialSpec: `${coverMaterial.name} - ${coverMaterial.weight || 'Standard weight'}`,
    cutToSize: `${sizes.finalSize} - ${Math.floor(Math.random() * 4) + 1} up`,
    cuttingQuantity: generateQuantity()
  }
}

// Populate specific sections with demo data
export const populateClientSection = () => {
  const client = getRandomClient()
  return {
    client: client.company,
    purchaseOrder: generatePurchaseOrder(),
    jobTitle: generateJobTitle(),
    quantity: generateQuantity(),
    description: generateDescription(generateJobTitle()),
    createdOn: new Date().toISOString().split('T')[0],
    dueDate: (() => {
      const dueDate = new Date()
      dueDate.setDate(dueDate.getDate() + 14)
      return dueDate.toISOString().split('T')[0]
    })()
  }
}

export const populateMaterialsSection = () => {
  const coverMaterial = getRandomMaterial()
  const innerMaterial = getRandomMaterial()
  
  return {
    coverMaterial: coverMaterial.name,
    innerMaterial: innerMaterial.name,
    materialSpec: `${coverMaterial.name} - ${coverMaterial.weight || 'Standard weight'}`,
    cutToSize: `Custom size - ${Math.floor(Math.random() * 4) + 1} up`,
    cuttingQuantity: generateQuantity()
  }
}

// Reset form to empty state
export const resetForm = (): DocketFormData => {
  return {
    client: '',
    purchaseOrder: '',
    jobTitle: '',
    quantity: '',
    description: '',
    createdOn: '',
    dueDate: '',
    openSize: '',
    finalSize: '',
    coverMaterial: '',
    coverColors: '',
    coverPantone: '',
    coverPrinting: '',
    coverFinishing: '',
    innerMaterial: '',
    innerColors: '',
    innerPantone: '',
    innerPrinting: '',
    pageCount: '',
    numbering: '',
    copyChange: '',
    materialSpec: '',
    cutToSize: '',
    cuttingQuantity: ''
  }
}
