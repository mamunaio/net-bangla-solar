const http = require('http');

http.get('http://localhost:3000', (res) => {
  let html = '';
  res.on('data', (chunk) => { html += chunk; });
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Total HTML length:', html.length);

    const sectionIds = [
      'home', 'about', 'solutions', 'technology', 'projects',
      'process', 'why-choose-us', 'sectors', 'faq', 'contact', 'quote'
    ];

    console.log('\n--- SECTION ID AUDIT ---');
    sectionIds.forEach(id => {
      const match = html.includes(`id="${id}"`);
      console.log(`ID #${id.padEnd(15)} : ${match ? 'FOUND [OK]' : 'MISSING [ERROR]'}`);
    });

    console.log('\n--- CONTENT SAFETY AUDIT ---');
    const forbidden = [
      '25+ MW', '100 MW+', '1,500+', '500+ customers', '30%+ average savings', '99% reliability',
      'Lorem ipsum', 'lorem', 'ipsum', 'example.com', '+880 1XXX'
    ];
    let violations = 0;
    forbidden.forEach(term => {
      if (html.toLowerCase().includes(term.toLowerCase())) {
        console.log(`VIOLATION: Found forbidden term "${term}"`);
        violations++;
      }
    });
    if (violations === 0) {
      console.log('Content Safety Check: ALL PASSED (Zero forbidden or prototype claims).');
    }

    console.log('\n--- OFFICIAL BRAND & CONTACT AUDIT ---');
    const requiredTerms = [
      'Net Bangla Solar',
      'A Division of Net Bangla Limited',
      'Engr. Md. Mamunur Rahman',
      'mamun@netbanglaltd.com',
      'info@netbanglaltd.com',
      'netbanglaenergy.com',
      'May 28, 2014',
      'BASIS General Member',
      'A-405',
      'BACCO Member',
      '2018.0082.1000.0062',
      'BTRC Registered Call Center',
      'CC/BPO'
    ];
    requiredTerms.forEach(term => {
      const found = html.includes(term);
      console.log(`Required "${term.padEnd(35)}" : ${found ? 'FOUND [OK]' : 'MISSING [ERROR]'}`);
    });
  });
}).on('error', (err) => {
  console.error('Error fetching localhost:', err.message);
});
