// Edit contact info here and it updates the footer everywhere.
export const contact = {
  name: 'Wally Day',
  email: 'info@sparkwave-tech.com',
  phone: '801-691-9497',
}

// Edit the products here; each one shows side by side on the Solar page.
// To change the price or checkout, create a new payment link in the Square
// dashboard and paste it into squareLink. Leave price, squareLink or specs
// empty and the page shows "Details coming soon" instead.
export const solarGenerators = [
  {
    name: 'Electric Solar Generator',
    price: '$3,499',
    squareLink: 'https://square.link/u/swQWnaGB',
    images: [
      { src: '/images/face.png', alt: 'Generator front view' },
      { src: '/images/rolling-toolbox-transparent.png', alt: 'Generator side view' },
    ],
    specs: [
      { label: 'Batteries', lines: ['2 x 12V fully enclosed LiFePo (7000 cycles charge/discharge)'] },
      { label: 'Power', lines: ['7680Wh | 24V | 320Ah battery', 'Up to 23kWh | 24V | 320Ah batteries', '3kW continuous AC power'] },
      {
        label: 'Output',
        lines: [
          '4 x 120V outlets (20 amps)',
          '4 x USB 3.0 outlets',
          '2 x USB C outlets',
          'Amp and Voltage meters',
          '(other configurations available upon request)',
        ],
      },
      {
        label: 'Approximate dimensions',
        lines: ['Weight: 125 lbs', 'Size: 22" Wide, 27" Height, 20" Deep'],
      },
    ],
  },
  {
    // TODO: fill in the real name, and replace squareLink with this product's own
    // payment link (it currently reuses the first generator's link).
    name: 'Stacked Solar Generator',
    price: '$5,999',
    squareLink: 'https://square.link/u/swQWnaGB',
    images: [
      { src: '/images/sg-stacked.png', alt: 'Stacked generator with expansion battery module' },
    ],
    specs: [
      { label: 'Batteries', lines: ['2 x 12V fully enclosed LiFePo (7000 cycles charge/discharge)'] },
      {
        label: 'Power',
        lines: ['7680Wh | 24V | 320Ah battery', 'Up to 23kWh | 24V | 320Ah batteries', '6kW continuous AC power'],
      },
      {
        label: 'Output',
        lines: [
          '1 x 240V outlet (30 amps)',
          '2 x 120V outlets (20 amps)',
          '2 x USB 3.0 outlets',
          'Amp and Voltage meters',
          '(other configurations available upon request)',
        ],
      },
      {
        label: 'Approximate dimensions',
        lines: ['Weight: 125 lbs', 'Size: 22" Wide, 27" Height, 20" Deep'],
      },
    ],
  },
]

// Shared by all generators on the Solar page.
export const solarFeatures = {
  features: [
    {
      label: 'Customizable',
      text: 'This is just the base model, it can be customized to suit your needs, preferences and budget. Some features that could be added are: additional outlets, outlet variations, jumper cable connection, RV connection, expanded battery capacity, adjusted wattage etc.',
    },
    {
      label: 'Repairable',
      text: 'Batteries have a limited life span, typically 3-7 years, with Sparkwave generators the system isn’t garbage when one battery dies. It can be replaced and repaired.',
    },
    {
      label: 'Expandable',
      text: 'Designed with the future in mind. It is built in a way where a middle section could easily be added for additional battery storage capacity.',
    },
    {
      label: 'Warranty',
      text: '1-year limited by defects, 6 months or 2000 cycles for batteries. Free labor for battery replacement or upgrade after 1 year.',
    },
  ],
  note: '*Solar panel not included*',
}
