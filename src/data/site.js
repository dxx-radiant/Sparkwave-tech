// Edit contact info here and it updates the footer everywhere.
export const contact = {
  name: 'Wally Day',
  email: 'info@sparkwave-tech.com',
  phone: '801-691-9497',
}

// Edit the products here. Each one gets a card on the Solar page; picking a
// card shows its full specs and Purchase button. `id` is used in the page
// address (e.g. /solar?product=stacked) and `highlights` are the short points
// shown on the card. To change the price or checkout, create a new payment link
// in the Square dashboard and paste it into squareLink. Leave price, squareLink
// or specs empty and the page shows "Details coming soon" instead.
export const solarGenerators = [
  {
    id: 'electric',
    name: '3Kw Solar Generator',
    price: '$3,499',
    highlights: ['7,680Wh battery, expandable to 23kWh','3kW continuous AC power', '4 x 120V outlets + USB & USB-C'],
    squareLink: 'https://square.link/u/swQWnaGB',
    images: [
      { src: '/images/face.png', alt: 'Generator front view' },
      { src: '/images/rolling-toolbox-transparent.png', alt: 'Generator side view' },
    ],
    specs: [
      { label: 'Batteries', lines: ['2 x 12V fully enclosed LiFePo (7000 cycles charge/discharge)'] },
      { label: 'Power', lines: ['7680Wh | 24V | 320Ah battery', 'Up to 23kWh | 24V | 320Ah batteries', '3Kw continuous AC power'] },
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
    id: 'stacked',
    name: '6Kw Solar Generator',
    price: '$5,999',
    highlights: ['7,680Wh battery, expandable to 23kWh','6Kw continuous AC power', '240V 30A outlet + 2 x 120V outlets'],
    squareLink: 'https://square.link/u/XWXsyaKJ',
    images: [
      // fadeEdges blends a photo's own studio background into the page's backdrop
      { src: '/images/sg-stacked.png', alt: 'Stacked generator with expansion battery module', fadeEdges: true },
    ],
    specs: [
      { label: 'Batteries', lines: ['2 x 12V fully enclosed LiFePo (7000 cycles charge/discharge)'] },
      {
        label: 'Power',
        lines: ['7680Wh | 24V | 320Ah battery', 'Up to 23kWh | 24V | 320Ah batteries', '6Kw continuous AC power'],
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
