// Expanded building data - 200 buildings with varying statuses
const buildings = [
    // Original buildings (1-10)
    { id: 1, lat: 40.7282, lng: -73.9872, status: "working", address: "123 Main Street", power: "working", water: "working" },
    { id: 2, lat: 40.7305, lng: -73.9850, status: "outage", address: "456 Oak Avenue", power: "outage", water: "outage" },
    { id: 3, lat: 40.7265, lng: -73.9830, status: "partial", address: "789 Pine Boulevard", power: "working", water: "outage" },
    { id: 4, lat: 40.7290, lng: -73.9810, status: "working", address: "101 Elm Street", power: "working", water: "working" },
    { id: 5, lat: 40.7250, lng: -73.9845, status: "outage", address: "202 Cedar Lane", power: "outage", water: "working" },
    { id: 6, lat: 40.7310, lng: -73.9840, status: "working", address: "303 Maple Drive", power: "working", water: "working" },
    { id: 7, lat: 40.7270, lng: -73.9890, status: "partial", address: "505 Willow Street", power: "working", water: "outage" },
    { id: 8, lat: 40.7240, lng: -73.9820, status: "outage", address: "707 Birch Avenue", power: "outage", water: "outage" },
    { id: 9, lat: 40.7320, lng: -73.9860, status: "partial", address: "909 Cypress Lane", power: "outage", water: "working" },
    { id: 10, lat: 40.7260, lng: -73.9900, status: "working", address: "111 Aspen Court", power: "working", water: "working" },
    
    // East Village / Lower East Side (11-30)
    { id: 11, lat: 40.7235, lng: -73.9865, status: "partial", address: "201 E 3rd Street", power: "working", water: "outage" },
    { id: 12, lat: 40.7245, lng: -73.9855, status: "working", address: "215 E 4th Street", power: "working", water: "working" },
    { id: 13, lat: 40.7255, lng: -73.9835, status: "outage", address: "178 Avenue A", power: "outage", water: "outage" },
    { id: 14, lat: 40.7261, lng: -73.9825, status: "working", address: "135 Avenue B", power: "working", water: "working" },
    { id: 15, lat: 40.7272, lng: -73.9815, status: "partial", address: "95 Avenue C", power: "outage", water: "working" },
    { id: 16, lat: 40.7287, lng: -73.9795, status: "outage", address: "72 Avenue D", power: "outage", water: "outage" },
    { id: 17, lat: 40.7292, lng: -73.9840, status: "working", address: "221 E 7th Street", power: "working", water: "working" },
    { id: 18, lat: 40.7302, lng: -73.9820, status: "outage", address: "350 E 9th Street", power: "outage", water: "outage" },
    { id: 19, lat: 40.7312, lng: -73.9810, status: "partial", address: "442 E 10th Street", power: "working", water: "outage" },
    { id: 20, lat: 40.7315, lng: -73.9830, status: "working", address: "511 E 11th Street", power: "working", water: "working" },
    { id: 21, lat: 40.7240, lng: -73.9780, status: "partial", address: "15 Avenue C", power: "outage", water: "working" },
    { id: 22, lat: 40.7250, lng: -73.9770, status: "outage", address: "27 Avenue D", power: "outage", water: "outage" },
    { id: 23, lat: 40.7260, lng: -73.9760, status: "working", address: "42 Avenue C", power: "working", water: "working" },
    { id: 24, lat: 40.7270, lng: -73.9750, status: "partial", address: "55 Avenue D", power: "working", water: "outage" },
    { id: 25, lat: 40.7280, lng: -73.9740, status: "outage", address: "78 Avenue C", power: "outage", water: "outage" },
    { id: 26, lat: 40.7190, lng: -73.9880, status: "working", address: "120 Delancey Street", power: "working", water: "working" },
    { id: 27, lat: 40.7200, lng: -73.9870, status: "outage", address: "135 Rivington Street", power: "outage", water: "outage" },
    { id: 28, lat: 40.7210, lng: -73.9860, status: "partial", address: "95 Stanton Street", power: "working", water: "outage" },
    { id: 29, lat: 40.7220, lng: -73.9850, status: "working", address: "210 Orchard Street", power: "working", water: "working" },
    { id: 30, lat: 40.7230, lng: -73.9840, status: "outage", address: "75 Essex Street", power: "outage", water: "outage" },
    
    // East Village / NoHo (31-50)
    { id: 31, lat: 40.7290, lng: -73.9880, status: "partial", address: "55 St. Mark's Place", power: "outage", water: "working" },
    { id: 32, lat: 40.7300, lng: -73.9870, status: "working", address: "112 Second Avenue", power: "working", water: "working" },
    { id: 33, lat: 40.7310, lng: -73.9860, status: "outage", address: "78 First Avenue", power: "outage", water: "outage" },
    { id: 34, lat: 40.7320, lng: -73.9850, status: "partial", address: "150 E 10th Street", power: "working", water: "outage" },
    { id: 35, lat: 40.7330, lng: -73.9840, status: "working", address: "205 E 12th Street", power: "working", water: "working" },
    { id: 36, lat: 40.7260, lng: -73.9950, status: "outage", address: "325 Broadway", power: "outage", water: "outage" },
    { id: 37, lat: 40.7270, lng: -73.9940, status: "working", address: "172 Prince Street", power: "working", water: "working" },
    { id: 38, lat: 40.7280, lng: -73.9930, status: "partial", address: "145 Spring Street", power: "outage", water: "working" },
    { id: 39, lat: 40.7290, lng: -73.9920, status: "outage", address: "88 Mercer Street", power: "outage", water: "outage" },
    { id: 40, lat: 40.7300, lng: -73.9910, status: "working", address: "210 Lafayette Street", power: "working", water: "working" },
    { id: 41, lat: 40.7320, lng: -74.0000, status: "partial", address: "122 Greenwich Avenue", power: "working", water: "outage" },
    { id: 42, lat: 40.7330, lng: -73.9990, status: "working", address: "95 Christopher Street", power: "working", water: "working" },
    { id: 43, lat: 40.7340, lng: -73.9980, status: "outage", address: "215 W 4th Street", power: "outage", water: "outage" },
    { id: 44, lat: 40.7350, lng: -73.9970, status: "partial", address: "178 Bleecker Street", power: "outage", water: "working" },
    { id: 45, lat: 40.7360, lng: -73.9960, status: "working", address: "55 MacDougal Street", power: "working", water: "working" },
    { id: 46, lat: 40.7400, lng: -74.0050, status: "outage", address: "225 W 14th Street", power: "outage", water: "outage" },
    { id: 47, lat: 40.7410, lng: -74.0040, status: "working", address: "180 W 20th Street", power: "working", water: "working" },
    { id: 48, lat: 40.7420, lng: -74.0030, status: "partial", address: "315 W 22nd Street", power: "working", water: "outage" },
    { id: 49, lat: 40.7430, lng: -74.0020, status: "outage", address: "422 W 24th Street", power: "outage", water: "outage" },
    { id: 50, lat: 40.7440, lng: -74.0010, status: "working", address: "255 W 25th Street", power: "working", water: "working" },
    
    // Midtown (51-70)
    { id: 51, lat: 40.7500, lng: -73.9900, status: "partial", address: "350 Fifth Avenue", power: "outage", water: "working" },
    { id: 52, lat: 40.7510, lng: -73.9890, status: "working", address: "11 W 42nd Street", power: "working", water: "working" },
    { id: 53, lat: 40.7520, lng: -73.9880, status: "outage", address: "500 Madison Avenue", power: "outage", water: "outage" },
    { id: 54, lat: 40.7530, lng: -73.9870, status: "partial", address: "120 Park Avenue", power: "working", water: "outage" },
    { id: 55, lat: 40.7540, lng: -73.9860, status: "working", address: "383 Madison Avenue", power: "working", water: "working" },
    { id: 56, lat: 40.7550, lng: -73.9850, status: "outage", address: "245 E 44th Street", power: "outage", water: "outage" },
    { id: 57, lat: 40.7560, lng: -73.9840, status: "working", address: "300 E 46th Street", power: "working", water: "working" },
    { id: 58, lat: 40.7570, lng: -73.9830, status: "partial", address: "405 E 48th Street", power: "working", water: "outage" },
    { id: 59, lat: 40.7580, lng: -73.9820, status: "outage", address: "220 E 50th Street", power: "outage", water: "outage" },
    { id: 60, lat: 40.7590, lng: -73.9810, status: "working", address: "155 E 52nd Street", power: "working", water: "working" },
    { id: 61, lat: 40.7600, lng: -73.9800, status: "partial", address: "300 E 54th Street", power: "outage", water: "working" },
    { id: 62, lat: 40.7610, lng: -73.9790, status: "working", address: "245 E 56th Street", power: "working", water: "working" },
    { id: 63, lat: 40.7620, lng: -73.9780, status: "outage", address: "405 E 58th Street", power: "outage", water: "outage" },
    { id: 64, lat: 40.7630, lng: -73.9770, status: "partial", address: "220 E 60th Street", power: "working", water: "outage" },
    { id: 65, lat: 40.7640, lng: -73.9760, status: "working", address: "155 E 62nd Street", power: "working", water: "working" },
    { id: 66, lat: 40.7650, lng: -73.9820, status: "outage", address: "45 W 55th Street", power: "outage", water: "outage" },
    { id: 67, lat: 40.7660, lng: -73.9830, status: "working", address: "120 W 57th Street", power: "working", water: "working" },
    { id: 68, lat: 40.7670, lng: -73.9840, status: "partial", address: "215 W 59th Street", power: "working", water: "outage" },
    { id: 69, lat: 40.7680, lng: -73.9850, status: "outage", address: "33 Central Park West", power: "outage", water: "outage" },
    { id: 70, lat: 40.7690, lng: -73.9860, status: "working", address: "55 Central Park West", power: "working", water: "working" },
    
    // Upper East Side (71-85)
    { id: 71, lat: 40.7700, lng: -73.9600, status: "partial", address: "1040 Fifth Avenue", power: "outage", water: "working" },
    { id: 72, lat: 40.7710, lng: -73.9590, status: "working", address: "725 Park Avenue", power: "working", water: "working" },
    { id: 73, lat: 40.7720, lng: -73.9580, status: "outage", address: "45 E 82nd Street", power: "outage", water: "outage" },
    { id: 74, lat: 40.7730, lng: -73.9570, status: "partial", address: "105 E 85th Street", power: "working", water: "outage" },
    { id: 75, lat: 40.7740, lng: -73.9560, status: "working", address: "175 E 87th Street", power: "working", water: "working" },
    { id: 76, lat: 40.7750, lng: -73.9550, status: "outage", address: "205 E 89th Street", power: "outage", water: "outage" },
    { id: 77, lat: 40.7760, lng: -73.9540, status: "working", address: "300 E 92nd Street", power: "working", water: "working" },
    { id: 78, lat: 40.7770, lng: -73.9530, status: "partial", address: "405 E 94th Street", power: "outage", water: "working" },
    { id: 79, lat: 40.7780, lng: -73.9520, status: "outage", address: "220 E 96th Street", power: "outage", water: "outage" },
    { id: 80, lat: 40.7790, lng: -73.9510, status: "working", address: "155 E 98th Street", power: "working", water: "working" },
    { id: 81, lat: 40.7800, lng: -73.9500, status: "partial", address: "125 E 100th Street", power: "working", water: "outage" },
    { id: 82, lat: 40.7810, lng: -73.9490, status: "working", address: "45 E 102nd Street", power: "working", water: "working" },
    { id: 83, lat: 40.7820, lng: -73.9480, status: "outage", address: "120 E 104th Street", power: "outage", water: "outage" },
    { id: 84, lat: 40.7830, lng: -73.9470, status: "partial", address: "215 E 106th Street", power: "outage", water: "working" },
    { id: 85, lat: 40.7840, lng: -73.9460, status: "working", address: "300 E 108th Street", power: "working", water: "working" },
    
    // Upper West Side (86-100)
    { id: 86, lat: 40.7800, lng: -73.9800, status: "outage", address: "45 W 81st Street", power: "outage", water: "outage" },
    { id: 87, lat: 40.7810, lng: -73.9790, status: "working", address: "120 W 86th Street", power: "working", water: "working" },
    { id: 88, lat: 40.7820, lng: -73.9780, status: "partial", address: "215 W 88th Street", power: "working", water: "outage" },
    { id: 89, lat: 40.7830, lng: -73.9770, status: "outage", address: "325 W 93rd Street", power: "outage", water: "outage" },
    { id: 90, lat: 40.7840, lng: -73.9760, status: "working", address: "78 Riverside Drive", power: "working", water: "working" },
    { id: 91, lat: 40.7850, lng: -73.9750, status: "partial", address: "125 W 96th Street", power: "outage", water: "working" },
    { id: 92, lat: 40.7860, lng: -73.9740, status: "working", address: "45 W 98th Street", power: "working", water: "working" },
    { id: 93, lat: 40.7870, lng: -73.9730, status: "outage", address: "120 W 101st Street", power: "outage", water: "outage" },
    { id: 94, lat: 40.7880, lng: -73.9720, status: "partial", address: "215 W 104th Street", power: "working", water: "outage" },
    { id: 95, lat: 40.7890, lng: -73.9710, status: "working", address: "300 W 106th Street", power: "working", water: "working" },
    { id: 96, lat: 40.7900, lng: -73.9700, status: "outage", address: "405 W 108th Street", power: "outage", water: "outage" },
    { id: 97, lat: 40.7910, lng: -73.9690, status: "working", address: "220 W 110th Street", power: "working", water: "working" },
    { id: 98, lat: 40.7920, lng: -73.9680, status: "partial", address: "155 W 112th Street", power: "outage", water: "working" },
    { id: 99, lat: 40.7930, lng: -73.9670, status: "outage", address: "125 W 114th Street", power: "outage", water: "outage" },
    { id: 100, lat: 40.7940, lng: -73.9660, status: "working", address: "45 W 116th Street", power: "working", water: "working" },
    
    // Harlem (101-120)
    { id: 101, lat: 40.8100, lng: -73.9500, status: "partial", address: "55 E 125th Street", power: "outage", water: "working" },
    { id: 102, lat: 40.8110, lng: -73.9490, status: "working", address: "125 Malcolm X Boulevard", power: "working", water: "working" },
    { id: 103, lat: 40.8120, lng: -73.9480, status: "outage", address: "215 W 135th Street", power: "outage", water: "outage" },
    { id: 104, lat: 40.8130, lng: -73.9470, status: "partial", address: "300 W 145th Street", power: "working", water: "outage" },
    { id: 105, lat: 40.8140, lng: -73.9460, status: "working", address: "175 Edgecombe Avenue", power: "working", water: "working" },
    { id: 106, lat: 40.8150, lng: -73.9450, status: "outage", address: "88 St. Nicholas Avenue", power: "outage", water: "outage" },
    { id: 107, lat: 40.8160, lng: -73.9440, status: "working", address: "150 W 127th Street", power: "working", water: "working" },
    { id: 108, lat: 40.8170, lng: -73.9430, status: "partial", address: "225 W 129th Street", power: "outage", water: "working" },
    { id: 109, lat: 40.8180, lng: -73.9420, status: "outage", address: "77 Lenox Avenue", power: "outage", water: "outage" },
    { id: 110, lat: 40.8190, lng: -73.9410, status: "working", address: "155 W 131st Street", power: "working", water: "working" },
    { id: 111, lat: 40.8200, lng: -73.9400, status: "partial", address: "215 W 133rd Street", power: "working", water: "outage" },
    { id: 112, lat: 40.8210, lng: -73.9390, status: "working", address: "300 W 135th Street", power: "working", water: "working" },
    { id: 113, lat: 40.8220, lng: -73.9380, status: "outage", address: "405 W 137th Street", power: "outage", water: "outage" },
    { id: 114, lat: 40.8230, lng: -73.9370, status: "partial", address: "220 W 139th Street", power: "outage", water: "working" },
    { id: 115, lat: 40.8240, lng: -73.9360, status: "working", address: "155 W 141st Street", power: "working", water: "working" },
    { id: 116, lat: 40.8250, lng: -73.9350, status: "outage", address: "125 W 143rd Street", power: "outage", water: "outage" },
    { id: 117, lat: 40.8260, lng: -73.9340, status: "working", address: "45 W 145th Street", power: "working", water: "working" },
    { id: 118, lat: 40.8270, lng: -73.9330, status: "partial", address: "120 W 147th Street", power: "working", water: "outage" },
    { id: 119, lat: 40.8280, lng: -73.9320, status: "outage", address: "215 W 149th Street", power: "outage", water: "outage" },
    { id: 120, lat: 40.8290, lng: -73.9310, status: "working", address: "300 W 151st Street", power: "working", water: "working" },
    
    // Washington Heights (121-135)
    { id: 121, lat: 40.8400, lng: -73.9400, status: "partial", address: "45 Fort Washington Avenue", power: "outage", water: "working" },
    { id: 122, lat: 40.8410, lng: -73.9390, status: "working", address: "112 W 170th Street", power: "working", water: "working" },
    { id: 123, lat: 40.8420, lng: -73.9380, status: "outage", address: "215 W 175th Street", power: "outage", water: "outage" },
    { id: 124, lat: 40.8430, lng: -73.9370, status: "partial", address: "305 W 180th Street", power: "working", water: "outage" },
    { id: 125, lat: 40.8440, lng: -73.9360, status: "working", address: "88 Haven Avenue", power: "working", water: "working" },
    { id: 126, lat: 40.8450, lng: -73.9350, status: "outage", address: "150 W 181st Street", power: "outage", water: "outage" },
    { id: 127, lat: 40.8460, lng: -73.9340, status: "working", address: "225 W 183rd Street", power: "working", water: "working" },
    { id: 128, lat: 40.8470, lng: -73.9330, status: "partial", address: "77 Cabrini Boulevard", power: "outage", water: "working" },
    { id: 129, lat: 40.8480, lng: -73.9320, status: "outage", address: "155 W 187th Street", power: "outage", water: "outage" },
    { id: 130, lat: 40.8490, lng: -73.9310, status: "working", address: "215 W 189th Street", power: "working", water: "working" },
    { id: 131, lat: 40.8500, lng: -73.9300, status: "partial", address: "300 W 191st Street", power: "working", water: "outage" },
    { id: 132, lat: 40.8510, lng: -73.9290, status: "working", address: "405 W 193rd Street", power: "working", water: "working" },
    { id: 133, lat: 40.8520, lng: -73.9280, status: "outage", address: "220 W 195th Street", power: "outage", water: "outage" },
    { id: 134, lat: 40.8530, lng: -73.9270, status: "partial", address: "155 W 197th Street", power: "outage", water: "working" },
    { id: 135, lat: 40.8540, lng: -73.9260, status: "working", address: "125 W 199th Street", power: "working", water: "working" },
    
    // Financial District (136-150)
    { id: 136, lat: 40.7050, lng: -74.0100, status: "outage", address: "14 Wall Street", power: "outage", water: "outage" },
    { id: 137, lat: 40.7060, lng: -74.0090, status: "working", address: "45 Broadway", power: "working", water: "working" },
    { id: 138, lat: 40.7070, lng: -74.0080, status: "partial", address: "23 Fulton Street", power: "outage", water: "working" },
    { id: 139, lat: 40.7080, lng: -74.0070, status: "outage", address: "55 William Street", power: "outage", water: "outage" },
    { id: 140, lat: 40.7090, lng: -74.0060, status: "working", address: "77 Water Street", power: "working", water: "working" },
    { id: 141, lat: 40.7100, lng: -74.0050, status: "partial", address: "125 Broad Street", power: "working", water: "outage" },
    { id: 142, lat: 40.7110, lng: -74.0040, status: "working", address: "45 John Street", power: "working", water: "working" },
    { id: 143, lat: 40.7120, lng: -74.0030, status: "outage", address: "120 Nassau Street", power: "outage", water: "outage" },
    { id: 144, lat: 40.7130, lng: -74.0020, status: "partial", address: "215 Pearl Street", power: "outage", water: "working" },
    { id: 145, lat: 40.7140, lng: -74.0010, status: "working", address: "300 Liberty Street", power: "working", water: "working" },
    { id: 146, lat: 40.7130, lng: -74.0150, status: "outage", address: "405 South Street", power: "outage", water: "outage" },
    { id: 147, lat: 40.7120, lng: -74.0140, status: "working", address: "220 Rector Place", power: "working", water: "working" },
    { id: 148, lat: 40.7110, lng: -74.0130, status: "partial", address: "155 Albany Street", power: "working", water: "outage" },
    { id: 149, lat: 40.7100, lng: -74.0120, status: "outage", address: "125 South End Avenue", power: "outage", water: "outage" },
    { id: 150, lat: 40.7090, lng: -74.0110, status: "working", address: "45 Battery Place", power: "working", water: "working" },
    
   // Continuing from Brooklyn Heights (151-165)
   { id: 151, lat: 40.6950, lng: -73.9950, status: "partial", address: "125 Montague Street", power: "outage", water: "working" },
   { id: 152, lat: 40.6960, lng: -73.9940, status: "working", address: "45 Pierrepont Street", power: "working", water: "working" },
   { id: 153, lat: 40.6970, lng: -73.9930, status: "outage", address: "88 Remsen Street", power: "outage", water: "outage" },
   { id: 154, lat: 40.6980, lng: -73.9920, status: "partial", address: "150 Hicks Street", power: "working", water: "outage" },
   { id: 155, lat: 40.6990, lng: -73.9910, status: "working", address: "212 Columbia Heights", power: "working", water: "working" },
   { id: 156, lat: 40.7000, lng: -73.9900, status: "outage", address: "77 Joralemon Street", power: "outage", water: "outage" },
   { id: 157, lat: 40.7010, lng: -73.9890, status: "working", address: "155 State Street", power: "working", water: "working" },
   { id: 158, lat: 40.7020, lng: -73.9880, status: "partial", address: "215 Atlantic Avenue", power: "outage", water: "working" },
   { id: 159, lat: 40.7030, lng: -73.9870, status: "outage", address: "300 Court Street", power: "outage", water: "outage" },
   { id: 160, lat: 40.7040, lng: -73.9860, status: "working", address: "405 Clinton Street", power: "working", water: "working" },
   { id: 161, lat: 40.7050, lng: -73.9850, status: "partial", address: "220 Henry Street", power: "working", water: "outage" },
   { id: 162, lat: 40.7060, lng: -73.9840, status: "working", address: "155 Baltic Street", power: "working", water: "working" },
   { id: 163, lat: 40.7070, lng: -73.9830, status: "outage", address: "125 Warren Street", power: "outage", water: "outage" },
   { id: 164, lat: 40.7080, lng: -73.9820, status: "partial", address: "45 Kane Street", power: "outage", water: "working" },
   { id: 165, lat: 40.7090, lng: -73.9810, status: "working", address: "120 Congress Street", power: "working", water: "working" },
   
   // Williamsburg (166-180)
   { id: 166, lat: 40.7100, lng: -73.9650, status: "outage", address: "225 Bedford Avenue", power: "outage", water: "outage" },
   { id: 167, lat: 40.7110, lng: -73.9640, status: "working", address: "110 N 7th Street", power: "working", water: "working" },
   { id: 168, lat: 40.7120, lng: -73.9630, status: "partial", address: "45 Metropolitan Avenue", power: "working", water: "outage" },
   { id: 169, lat: 40.7130, lng: -73.9620, status: "outage", address: "78 Grand Street", power: "outage", water: "outage" },
   { id: 170, lat: 40.7140, lng: -73.9610, status: "working", address: "155 S 4th Street", power: "working", water: "working" },
   { id: 171, lat: 40.7150, lng: -73.9600, status: "partial", address: "215 Driggs Avenue", power: "outage", water: "working" },
   { id: 172, lat: 40.7160, lng: -73.9590, status: "working", address: "300 Roebling Street", power: "working", water: "working" },
   { id: 173, lat: 40.7170, lng: -73.9580, status: "outage", address: "405 Union Avenue", power: "outage", water: "outage" },
   { id: 174, lat: 40.7180, lng: -73.9570, status: "partial", address: "220 Havemeyer Street", power: "working", water: "outage" },
   { id: 175, lat: 40.7190, lng: -73.9560, status: "working", address: "155 N 10th Street", power: "working", water: "working" },
   { id: 176, lat: 40.7200, lng: -73.9550, status: "outage", address: "125 N 12th Street", power: "outage", water: "outage" },
   { id: 177, lat: 40.7210, lng: -73.9540, status: "working", address: "45 Bayard Street", power: "working", water: "working" },
   { id: 178, lat: 40.7220, lng: -73.9530, status: "partial", address: "120 Richardson Street", power: "outage", water: "working" },
   { id: 179, lat: 40.7230, lng: -73.9520, status: "outage", address: "215 Frost Street", power: "outage", water: "outage" },
   { id: 180, lat: 40.7240, lng: -73.9510, status: "working", address: "300 Withers Street", power: "working", water: "working" },
   
   // Long Island City (181-200)
   { id: 181, lat: 40.7450, lng: -73.9480, status: "partial", address: "45 Vernon Boulevard", power: "outage", water: "working" },
   { id: 182, lat: 40.7460, lng: -73.9470, status: "working", address: "22-44 Jackson Avenue", power: "working", water: "working" },
   { id: 183, lat: 40.7470, lng: -73.9460, status: "outage", address: "45-40 Center Boulevard", power: "outage", water: "outage" },
   { id: 184, lat: 40.7480, lng: -73.9450, status: "partial", address: "10-30 41st Avenue", power: "working", water: "outage" },
   { id: 185, lat: 40.7490, lng: -73.9440, status: "working", address: "41-20 27th Street", power: "working", water: "working" },
   { id: 186, lat: 40.7500, lng: -73.9430, status: "outage", address: "24-15 Queens Plaza North", power: "outage", water: "outage" },
   { id: 187, lat: 40.7510, lng: -73.9420, status: "working", address: "42-15 Crescent Street", power: "working", water: "working" },
   { id: 188, lat: 40.7520, lng: -73.9410, status: "partial", address: "38-01 23rd Avenue", power: "outage", water: "working" },
   { id: 189, lat: 40.7530, lng: -73.9400, status: "outage", address: "23-10 41st Avenue", power: "outage", water: "outage" },
   { id: 190, lat: 40.7540, lng: -73.9390, status: "working", address: "27-28 Thomson Avenue", power: "working", water: "working" },
   { id: 191, lat: 40.7550, lng: -73.9380, status: "partial", address: "43-10 Crescent Street", power: "working", water: "outage" },
   { id: 192, lat: 40.7560, lng: -73.9370, status: "working", address: "28-10 38th Avenue", power: "working", water: "working" },
   { id: 193, lat: 40.7570, lng: -73.9360, status: "outage", address: "31-00 47th Avenue", power: "outage", water: "outage" },
   { id: 194, lat: 40.7580, lng: -73.9350, status: "partial", address: "36-01 35th Avenue", power: "outage", water: "working" },
   { id: 195, lat: 40.7590, lng: -73.9340, status: "working", address: "39-20 29th Street", power: "working", water: "working" },
   { id: 196, lat: 40.7600, lng: -73.9250, status: "outage", address: "25-35 30th Avenue", power: "outage", water: "outage" },
   { id: 197, lat: 40.7610, lng: -73.9240, status: "working", address: "30-12 Broadway", power: "working", water: "working" },
   { id: 198, lat: 40.7620, lng: -73.9230, status: "partial", address: "31-04 Ditmars Boulevard", power: "outage", water: "working" },
   { id: 199, lat: 40.7630, lng: -73.9220, status: "outage", address: "23-55 31st Street", power: "outage", water: "outage" },
   { id: 200, lat: 40.7640, lng: -73.9210, status: "working", address: "14-35 30th Road", power: "working", water: "working" }
];

// Sample community posts with character avatars
const communityPosts = [
    {
        author: "Sarah Miller",
        avatar: "pinky",
        characterName: "Pinky",
        time: "10 minutes ago",
        content: "Anyone have extra water bottles to share? We're running low at 456 Oak Avenue.",
        likes: 12,
        comments: 8
    },
    {
        author: "David Chen",
        avatar: "boxo",
        characterName: "Boxo",
        time: "35 minutes ago",
        content: "Power is back on at Pine Boulevard! Should be restored to the whole block within an hour according to the crew on site.",
        likes: 27,
        comments: 5
    },
    {
        author: "Emma Johnson",
        avatar: "olive",
        characterName: "Olive",
        time: "2 hours ago",
        content: "I've set up a charging station in the lobby of 101 Elm Street. Feel free to stop by if you need to charge your devices.",
        likes: 18,
        comments: 3
    }
];

// Document ready function
document.addEventListener('DOMContentLoaded', () => {
    // Initialize app
    startApp();

    initHelpSupportButton();

    initTranslateModal();

    
    // Initialize community post creation functionality
    initCommunityPostFunctionality();
    // Add to startApp function
initReportWorkingButton();
// Add after inserting the new post element
setupPostInteractions(postElement);
});
document.addEventListener('DOMContentLoaded', () => {
    startApp();
    initCommunityPostFunctionality(); 
    // ← This is the missing piece
    document.addEventListener('DOMContentLoaded', () => {
        startApp();
        initResourceCategoryFilters(); // <-- Add this
    });
    
});

// Main app initialization
function startApp() {
    console.log("Starting Watch Tower Main App...");
    
    // Hide loader after 2 seconds
    setTimeout(() => {
        document.querySelector('.app-loader').style.display = 'none';
    }, 2000);

    document.addEventListener('DOMContentLoaded', () => {
        startApp();
        initResourceCategoryFilters(); // <-- Add this
    });
    
    // Check if user came from onboarding
    const onboardingComplete = localStorage.getItem('onboardingComplete');
    if (!onboardingComplete) {
        // Redirect to onboarding if not completed
        window.location.href = 'index.html';
        return;
    }
    
    // Initialize user profile from localStorage
    updateProfileInfo();
    
    // Initialize map if Google Maps API is available
    if (typeof google !== 'undefined' && google.maps) {
        initMap();
    } 
    
    // Initialize navigation
    initNavigation();
    
    // Initialize header icons
    initHeaderIcons();

    initTranslateDropdown();

    
    // Initialize community posts
    loadCommunityPosts();
    
    
    // Check connection status
    checkConnectivity();
    
    // Load reminders from localStorage
    loadRemindersFromStorage();
    
    // Initialize alerts tab
    initAlertsTab();
    
    // Load default section (Map)
    showSection('mapSection');
    // Add this after: postsContainer.appendChild(postElement);
setupPostInteractions(postElement);
}

function initTranslateDropdown() {
    const dropdown = document.getElementById('languageSelect');
    const translatableElements = document.querySelectorAll('[data-translate]');

    if (!dropdown || translatableElements.length === 0) return;

    dropdown.addEventListener('change', function () {
        const targetLang = dropdown.value;
        if (!targetLang) return;

        translatableElements.forEach(el => {
            const originalText = el.textContent;

            fetch('https://translation.googleapis.com/language/translate/v2', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    q: originalText,
                    target: targetLang,
                    format: 'text',
                    key: 'AIzaSyDkXUbDakCzPYIwbd15orQsH8waxiMLfhk'
                })
            })
            .then(res => res.json())
            .then(data => {
                if (data?.data?.translations?.[0]?.translatedText) {
                    el.textContent = data.data.translations[0].translatedText;
                } else {
                    console.error("Translation failed for:", originalText);
                }
            })
            .catch(err => {
                console.error("Translation error:", err);
            });
        });
    });
}
``


// Update profile with localStorage data
function updateProfileInfo() {
    const name = localStorage.getItem('userName') || 'User';
    const zipcode = localStorage.getItem('userZipcode') || '00000';
    const email = localStorage.getItem('userEmail') || 'user@example.com';
    
    document.getElementById('profileName').textContent = name;
    document.getElementById('profileZipcode').textContent = zipcode;
    document.getElementById('profileEmail').textContent = email;
    
    // Get the user's selected character
    const selectedCharacter = localStorage.getItem('selectedCharacter') || 'olive';
    
    // Check if user has a profile image already set
    const profileImage = localStorage.getItem('profileImage');
    
    if (profileImage) {
        document.getElementById('profileAvatar').innerHTML = `<img src="${profileImage}" alt="Profile">`;
    } else {
        // Use character image as profile avatar
        document.getElementById('profileAvatar').innerHTML = `
            <div class="character-avatar ${selectedCharacter}"></div>
        `;
        
        // Add CSS for character avatar - without backgrounds or borders
        if (!document.getElementById('character-avatar-style')) {
            const style = document.createElement('style');
            style.id = 'character-avatar-style';
            style.textContent = `
                .profile-photo {
                    background: transparent;
                    border: none;
                }
                .character-avatar {
                    width: 100%;
                    height: 100%;
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                }
                .character-avatar.olive {
                    background-image: url('olive.png');
                }
                .character-avatar.pinky {
                    background-image: url('pinky.png');
                }
                .character-avatar.boxo {
                    background-image: url('boxo.png');
                }
                .character-avatar.trigo {
                    background-image: url('trigo.png');
                }
                .character-avatar.ghost {
                    background-image: url('ghost.png');
                }
            `;
            document.head.appendChild(style);
        }
    }
}

function initResourceCategoryFilters() {
    const categoryTabs = document.querySelectorAll('.resource-category');
    const resourceItems = document.querySelectorAll('.resources-list .resource-item');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const selectedCategory = tab.textContent.trim().toLowerCase();

            // Highlight the active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Filter resource items
            resourceItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (selectedCategory === 'all' || itemCategory === selectedCategory) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function initHelpModal() {
    const helpBtn = document.getElementById('helpSupportBtn');
    const helpModal = document.getElementById('helpModal');
    const closeBtn = document.getElementById('closeHelpModal');
    const helpForm = document.getElementById('helpForm');

    if (!helpBtn || !helpModal) return;

    helpBtn.addEventListener('click', () => {
        helpModal.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        helpModal.classList.remove('show');
    });

    helpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast("Help request submitted. We'll get back to you soon.");
        helpModal.classList.remove('show');
        helpForm.reset();
    });
}
function initHelpSupportButton() {
    console.log("Initializing help support button");
    const helpBtn = document.getElementById('helpSupportBtn');
    const helpModal = document.getElementById('helpModal');
    const closeBtn = document.getElementById('closeHelpModal');
    
    if (!helpBtn) {
        console.error("Help button not found!");
        return;
    }
    
    if (!helpModal) {
        console.error("Help modal not found!");
        return;
    }
    
    helpBtn.addEventListener('click', function() {
        console.log("Help button clicked");
        helpModal.classList.add('show');
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            helpModal.classList.remove('show');
        });
    } else {
        console.error("Close button not found!");
    }
}

function initResourceSearch() {
    const input = document.getElementById('resourceSearchInput');
    const resourceItems = document.querySelectorAll('.resources-list .resource-item');

    if (!input) return;

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();

        resourceItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Initialize Google Maps
function initMap() {
    console.log("Initializing map...");
    const mapDiv = document.getElementById('map');
    
    if (!mapDiv) {
        console.error("Map div not found");
        return;
    }

    const map = new google.maps.Map(mapDiv, {
        center: { lat: 40.7282, lng: -73.9872 },
        zoom: 14,
        styles: pinkYellowBlueMapStyle, // Use new map style
    });

    // Add markers for buildings
// Add markers for buildings
// Add markers for buildings
// Add markers for buildings
buildings.forEach(building => {
    // Power marker
    const powerMarker = new google.maps.Marker({
        position: { lat: building.lat + 0.0002, lng: building.lng }, // Offset slightly
        map: map,
        title: `${building.address} - Power`,
        icon: getMarkerIcon(building.power || building.status, 'power'),
    });

    // Water marker
    const waterMarker = new google.maps.Marker({
        position: { lat: building.lat - 0.0002, lng: building.lng }, // Offset slightly
        map: map,
        title: `${building.address} - Water`,
        icon: getMarkerIcon(building.water || building.status, 'water'),
    });

    powerMarker.addListener('click', () => {
        showBuildingDetails(building);
    });
    
    waterMarker.addListener('click', () => {
        showBuildingDetails(building);
    });
});
    // Initialize the report working button functionality
    // Initialize action buttons
    initActionButtons(map);
}


// Choose marker color by building status
function getMarkerIcon(status, type) {
    let color;
    
    if (type === 'power') {
        // Green for power
        if (status === 'working') color = '#00FF66'; // Bright green
        else if (status === 'partial') color = '#AAFF88'; // Light green
        else if (status === 'outage') color = '#005522'; // Dark green
    } else if (type === 'water') {
        // Blue for water
        if (status === 'working') color = '#00CCFF'; // Bright blue
        else if (status === 'partial') color = '#88DDFF'; // Light blue
        else if (status === 'outage') color = '#004488'; // Dark blue
    } else {
        // Default colors if type not specified
        if (status === 'working') color = '#4a6c8c'; 
        else if (status === 'partial') color = '#5d7d9a';
        else if (status === 'outage') color = '#2d4a68';
    }

    // Check if Google Maps API is loaded
    if (typeof google === 'undefined' || !google.maps) {
        return null;
    }

    return {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 1,
    };
}

// Initialize map action buttons
function initActionButtons(map) {
    const refreshBtn = document.getElementById('refreshBtn');
    const locationBtn = document.getElementById('locationBtn');
    
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            showToast('Refreshing map data...');
            // In a real app, this would fetch new data
        });
    }
    
    if (locationBtn) {
        locationBtn.addEventListener('click', () => {
            showToast('Finding your location...');
            // In a real app, this would get the user's location
            map.setCenter({ lat: 40.7282, lng: -73.9872 });
            map.setZoom(16);
        });
    }
}

// Open building status panel
function showBuildingDetails(building) {
    console.log("Showing:", building.address);
    const panel = document.getElementById('statusPanel');
    if (panel) {
        panel.querySelector('.panel-title').textContent = building.address;
        
        // Update status items based on building status
        const statusItems = panel.querySelectorAll('.status-item');
        if (statusItems.length >= 3) {
            if (building.status === 'working') {
                statusItems[0].querySelector('.status-icon').style.backgroundColor = '#00ff66';
                statusItems[0].querySelector('.status-text').textContent = 'Power: Working';
                statusItems[1].querySelector('.status-icon').style.backgroundColor = '#00ff66';
                statusItems[1].querySelector('.status-text').textContent = 'Water: Working';
                statusItems[2].querySelector('.status-icon').style.backgroundColor = '#00ff66';
                statusItems[2].querySelector('.status-text').textContent = 'Internet: Working';
            } else if (building.status === 'outage') {
                statusItems[0].querySelector('.status-icon').style.backgroundColor = '#ff3366';
                statusItems[0].querySelector('.status-text').textContent = 'Power: Outage';
                statusItems[1].querySelector('.status-icon').style.backgroundColor = '#ff3366';
                statusItems[1].querySelector('.status-text').textContent = 'Water: Outage';
                statusItems[2].querySelector('.status-icon').style.backgroundColor = '#ff3366';
                statusItems[2].querySelector('.status-text').textContent = 'Internet: Outage';
            } else if (building.status === 'partial') {
                statusItems[0].querySelector('.status-icon').style.backgroundColor = '#00ff66';
                statusItems[0].querySelector('.status-text').textContent = 'Power: Working';
                statusItems[1].querySelector('.status-icon').style.backgroundColor = '#ff3366';
                statusItems[1].querySelector('.status-text').textContent = 'Water: Outage';
                statusItems[2].querySelector('.status-icon').style.backgroundColor = '#ffcc00';
                statusItems[2].querySelector('.status-text').textContent = 'Internet: Limited';
            }
        }
        
        panel.classList.add('active');
    }
}

// Close building status panel
function closePanel() {
    const panel = document.getElementById('statusPanel');
    if (panel) {
        panel.classList.remove('active');
    }
}
// Initialize the report working button functionality
function initReportWorkingButton() {
    const reportWorkingBtn = document.getElementById('reportWorkingBtn');
    if (reportWorkingBtn) {
        reportWorkingBtn.addEventListener('click', function() {
            showToast('Status reported as working. Thank you!');
            // Close the panel after reporting
            closePanel();
        });
    }
}
// Navigation between sections
function initNavigation() {
    const sections = {
        navMap: 'mapSection',
        navCommunity: 'communitySection',
        navResources: 'resourcesSection',
        navAlerts: 'alertsSection',
        navProfile: 'profileSection'
    };

    // Initialize navigation items
    Object.keys(sections).forEach(navId => {
        const navItem = document.getElementById(navId);
        if (navItem) {
            navItem.addEventListener('click', () => {
                // Show selected section
                showSection(sections[navId]);
                
                // Update active nav item
                setActiveNavItem(navId);
            });
        }
    });

    // Initialize close buttons
    document.getElementById('closePanel')?.addEventListener('click', closePanel);
    
    // Initialize tab navigation
    initTabNavigation();
}
// Enhanced toast message for reports
function showReportToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = message;
      toast.className = 'toast report-toast';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);
    }
  }
  
  // Update the showBuildingDetails function to handle reporting
  function showBuildingDetails(building) {
    console.log("Showing:", building.address);
    const panel = document.getElementById('statusPanel');
    if (panel) {
      panel.querySelector('.panel-title').textContent = building.address;
      
      // Store building ID for reporting
      panel.dataset.buildingId = building.id;
      
      // Update status items based on building status
      const statusItems = panel.querySelectorAll('.status-item');
      if (statusItems.length >= 3) {
        // Power status
        updateStatusItem(statusItems[0], 
                        building.power || building.status, 
                        'Power');
        
        // Water status
        updateStatusItem(statusItems[1], 
                        building.water || building.status, 
                        'Water');
        
        // Internet status (assuming based on power in this demo)
        const internetStatus = (building.power === 'working' || building.status === 'working') 
                            ? 'working' 
                            : (building.power === 'partial' || building.status === 'partial')
                            ? 'limited'
                            : 'outage';
        
        updateStatusItem(statusItems[2], 
                        internetStatus, 
                        'Internet');
      }
      
      // Update button text based on status
      const reportBtn = document.getElementById('reportWorkingBtn');
      if (reportBtn) {
        if (building.status === 'working' && building.power === 'working' && building.water === 'working') {
          reportBtn.innerHTML = '<i class="fas fa-check"></i> Already Working';
          reportBtn.disabled = true;
          reportBtn.style.opacity = '0.7';
        } else {
          reportBtn.innerHTML = '<i class="fas fa-check"></i> Report Working';
          reportBtn.disabled = false;
          reportBtn.style.opacity = '1';
        }
      }
      
      panel.classList.add('active');
    }
  }
  
  // Helper function to update status items
  function updateStatusItem(item, status, label) {
    const icon = item.querySelector('.status-icon');
    const text = item.querySelector('.status-text');
    
    if (status === 'working') {
      icon.style.backgroundColor = '#00ff66';
      text.textContent = `${label}: Working`;
    } else if (status === 'partial' || status === 'limited') {
      icon.style.backgroundColor = '#ffcc00';
      text.textContent = `${label}: Limited`;
    } else if (status === 'outage') {
      icon.style.backgroundColor = '#ff3366';
      text.textContent = `${label}: Outage`;
    } else {
      icon.style.backgroundColor = '#aaaaaa';
      text.textContent = `${label}: Unknown`;
    }
  }
  
  // Update the initReportWorkingButton function
  function initReportWorkingButton() {
    const reportWorkingBtn = document.getElementById('reportWorkingBtn');
    if (reportWorkingBtn) {
      reportWorkingBtn.addEventListener('click', function() {
        const panel = document.getElementById('statusPanel');
        
        // Get the location being reported
        const title = panel.querySelector('.panel-title').textContent;
        
        // Check if this is for an existing building
        const buildingId = panel.dataset.buildingId;
        if (buildingId) {
          // Update the building status in our data
          const building = buildings.find(b => b.id.toString() === buildingId);
          if (building) {
            building.status = 'working';
            building.power = 'working';
            building.water = 'working';
            
            // Update any markers on the map (would need marker references)
            // In a real app, this would update the database
          }
        } else if (panel.dataset.reportLat && panel.dataset.reportLng) {
          // This was a click on the map - we could add a new building
          // For the demo, we'll just show a notification
          console.log("New location reported as working:", 
                     panel.dataset.reportLat, 
                     panel.dataset.reportLng);
        }
        
        // Create notification for the report
        createNotification(title);
        
        // Show enhanced toast
        showReportToast('Status reported as working. Thank you!');
        
        // Close the panel
        closePanel();
        
        // If Alerts section isn't showing, highlight the alerts nav
        const alertsIcon = document.querySelector('#navAlerts .nav-icon');
        if (alertsIcon && !document.getElementById('alertsSection').classList.contains('active')) {
          alertsIcon.style.color = '#ff3366';
          setTimeout(() => {
            alertsIcon.style.color = '';
          }, 5000);
        }
      });
    }
  }
  
  // Make sure to call these functions
  document.addEventListener('DOMContentLoaded', () => {
    // These will be called by startApp() already
    
    // Add a direct call to initialize the report button
    // in case it wasn't initialized elsewhere
    setTimeout(() => {
      if (typeof initReportWorkingButton === 'function' && 
          document.getElementById('reportWorkingBtn')) {
        initReportWorkingButton();
      }
    }, 3000); // Give the app time to load
  });
  // Add this function to make map clicks show the status panel
function initMapClickReporting(map) {
    // Add click event listener to the map
    map.addListener('click', function(event) {
      // Get the clicked coordinates
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      
      // Find the nearest building to the clicked coordinates
      const nearestBuilding = findNearestBuilding(lat, lng);
      
      // Show building details with the nearby building
      if (nearestBuilding) {
        showBuildingDetails(nearestBuilding);
      } else {
        // If no nearby building, create a temporary one
        showTemporaryBuildingReport(lat, lng);
      }
    });
  }
  
  // Function to find the nearest building to the clicked coordinates
  function findNearestBuilding(clickedLat, clickedLng) {
    let nearestBuilding = null;
    let shortestDistance = Infinity;
    
    buildings.forEach(building => {
      // Calculate distance (simple Euclidean)
      const distance = Math.sqrt(
        Math.pow(building.lat - clickedLat, 2) + 
        Math.pow(building.lng - clickedLng, 2)
      );
      
      // If this is closer than the current nearest
      if (distance < shortestDistance) {
        shortestDistance = distance;
        nearestBuilding = building;
      }
    });
    
    // Only return building if it's within a reasonable distance
    // Using 0.003 as threshold (roughly 300m)
    if (shortestDistance < 0.003) {
      return nearestBuilding;
    }
    
    return null;
  }
  
  // Function to show a temporary reporting panel for a location with no building
  function showTemporaryBuildingReport(lat, lng) {
    // Get reverse geocoded address (in a real app)
    // For the demo, we'll use coordinates
    const tempAddress = `Location (${lat.toFixed(5)}, ${lng.toFixed(5)})`;
    
    const panel = document.getElementById('statusPanel');
    if (panel) {
      panel.querySelector('.panel-title').textContent = tempAddress;
      
      // Update status items for unknown location
      const statusItems = panel.querySelectorAll('.status-item');
      if (statusItems.length >= 3) {
        statusItems[0].querySelector('.status-icon').style.backgroundColor = '#aaaaaa';
        statusItems[0].querySelector('.status-text').textContent = 'Power: Unknown';
        statusItems[1].querySelector('.status-icon').style.backgroundColor = '#aaaaaa';
        statusItems[1].querySelector('.status-text').textContent = 'Water: Unknown';
        statusItems[2].querySelector('.status-icon').style.backgroundColor = '#aaaaaa';
        statusItems[2].querySelector('.status-text').textContent = 'Internet: Unknown';
      }
  
      // Store the lat/lng for reporting
      panel.dataset.reportLat = lat;
      panel.dataset.reportLng = lng;
      
      panel.classList.add('active');
    }
  }
  
  // Modify the initReportWorkingButton function to handle all locations
  function initReportWorkingButton() {
    const reportWorkingBtn = document.getElementById('reportWorkingBtn');
    if (reportWorkingBtn) {
      reportWorkingBtn.addEventListener('click', function() {
        const panel = document.getElementById('statusPanel');
        
        // Get the location being reported
        const title = panel.querySelector('.panel-title').textContent;
        
        // Create notification for the report
        createNotification(title);
        
        // Update real-time map data if needed
        // For demonstration, we'll close the panel
        showToast('Status reported as working. Thank you!');
        closePanel();
      });
    }
  }
  
  // Function to create a new notification for the report
  function createNotification(locationTitle) {
    // Get the notifications container
    const notificationsList = document.querySelector('.notifications-list');
    if (!notificationsList) return;
    
    // Create new notification element
    const notificationItem = document.createElement('div');
    notificationItem.className = 'notification-item';
    
    // Get current time
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    // Set notification content
    notificationItem.innerHTML = `
      <div class="notification-icon">
        <i class="fas fa-check-circle"></i>
      </div>
      <div class="notification-content">
        <div class="notification-title">Status Reported: Working</div>
        <div class="notification-desc">Location: ${locationTitle}</div>
        <div class="notification-time">Just now</div>
      </div>
    `;
    
    // Add to notifications list at the top
    if (notificationsList.firstChild) {
      notificationsList.insertBefore(notificationItem, notificationsList.firstChild);
    } else {
      notificationsList.appendChild(notificationItem);
    }
    
    // Update notification count in UI if needed (optional)
    updateNotificationCount();
  }
  
  // Optional function to update notification count badge
  function updateNotificationCount() {
    // Get notification icon in header
    const bellIcon = document.querySelector('.header-icons .icon-circle:nth-child(2)');
    
    if (bellIcon) {
      // If there's already a badge, increase count
      let badge = bellIcon.querySelector('.notification-badge');
      
      if (badge) {
        let count = parseInt(badge.textContent) || 0;
        badge.textContent = count + 1;
      } else {
        // Create new badge
        badge = document.createElement('span');
        badge.className = 'notification-badge';
        badge.textContent = '1';
        badge.style.position = 'absolute';
        badge.style.top = '-5px';
        badge.style.right = '-5px';
        badge.style.backgroundColor = '#ff3366';
        badge.style.color = 'white';
        badge.style.fontSize = '10px';
        badge.style.fontWeight = 'bold';
        badge.style.padding = '2px 5px';
        badge.style.borderRadius = '50%';
        bellIcon.style.position = 'relative';
        bellIcon.appendChild(badge);
      }
    }
  }
  
  // Update the initMap function to include our new map click handler
  function initMap() {
    console.log("Initializing map...");
    const mapDiv = document.getElementById('map');
    
    if (!mapDiv) {
      console.error("Map div not found");
      return;
    }
  
    const map = new google.maps.Map(mapDiv, {
      center: { lat: 40.7282, lng: -73.9872 },
      zoom: 14,
      styles: pinkYellowBlueMapStyle,
    });
  
    // Add markers for buildings
    buildings.forEach(building => {
      // Power marker
      const powerMarker = new google.maps.Marker({
        position: { lat: building.lat + 0.0002, lng: building.lng },
        map: map,
        title: `${building.address} - Power`,
        icon: getMarkerIcon(building.power || building.status, 'power'),
      });
  
      // Water marker
      const waterMarker = new google.maps.Marker({
        position: { lat: building.lat - 0.0002, lng: building.lng },
        map: map,
        title: `${building.address} - Water`,
        icon: getMarkerIcon(building.water || building.status, 'water'),
      });
  
      powerMarker.addListener('click', () => {
        showBuildingDetails(building);
      });
      
      waterMarker.addListener('click', () => {
        showBuildingDetails(building);
      });
    });
  
    // Add map click functionality for reporting
    initMapClickReporting(map);
    
    // Initialize action buttons
    initActionButtons(map);
    
    // Initialize the report working button functionality
    initReportWorkingButton();
  }
  
  // Add some CSS for new notification badge
  const style = document.createElement('style');
  style.textContent = `
    .notification-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      background-color: #ff3366;
      color: white;
      font-size: 10px;
      font-weight: bold;
      padding: 2px 5px;
      border-radius: 50%;
      min-width: 15px;
      text-align: center;
    }
    
    .icon-circle {
      position: relative;
    }
  `;
  document.head.appendChild(style);
// Initialize header icons

function initHeaderIcons() {
    console.log("Initializing header icons...");
    
    // Get the icons
    const translateIcon = document.querySelector('.header-icons .icon-circle:first-child');
    const bellIcon = document.querySelector('.header-icons .icon-circle:nth-child(2)');
    const settingsIcon = document.querySelector('.header-icons .icon-circle:last-child');
    
    // Translate icon is handled separately in initTranslationFeature
    
    // Add click event for bell icon (navigates to Alerts section)
    if (bellIcon) {
        bellIcon.addEventListener('click', function() {
            console.log("Bell icon clicked");
            // Show alerts section
            showSection('alertsSection');
            
            // Update active nav item
            setActiveNavItem('navAlerts');
        });
    } else {
        console.error("Bell icon not found");
    }
    
    // Add click event for settings icon (navigates to Profile section)
    if (settingsIcon) {
        settingsIcon.addEventListener('click', function() {
            console.log("Settings icon clicked");
            // Show profile section
            showSection('profileSection');
            
            // Update active nav item
            setActiveNavItem('navProfile');
        });
    } else {
        console.error("Settings icon not found");
    }
}

// Show a specific section and hide others
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        
        // Special handling for community section
        if (sectionId === 'communitySection') {
            loadCommunityPostsByCategory('childcare');
            initCommunityPostFunctionality(); // <-- re-bind modal open button
        }
        if (sectionId === 'resourcesSection') {
            initResourceCategoryFilters();
            initResourceSearch(); // ← add this
        }
        
        if (sectionId === 'alertsSection') {
            initNotificationTabs();
            initNotificationCategoryFilters();  // ← Add this
        }
        // In the showSection function, inside the profile section condition
        if (sectionId === 'profileSection') {
             updateProfileInfo();
             initCharacterSelection();
             initHelpSupportButton(); // Add this line

        }
        
        
    }
}
function loadCommunityPostsByCategory(category) {
    const posts = communityPostsByCategory[category] || [];
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) return;

    postsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <div class="post-header">
                <div class="post-avatar"><div class="post-avatar-character ${post.avatar}"></div></div>
                <div class="post-info">
                    <div class="post-author">${post.author}</div>
                    <div class="post-time">${post.time} • ${post.characterName}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <div class="post-action like-action">
                    <i class="fas fa-thumbs-up"></i>
                    <span>${post.likes}</span>
                </div>
                <div class="post-action comment-action">
                    <i class="fas fa-comment"></i>
                    <span>${post.comments}</span>
                </div>
                <div class="post-action share-action">
                    <i class="fas fa-share"></i>
                    <span>Share</span>
                </div>
            </div>
            <div class="comment-input" style="display:none;">
                <input type="text" placeholder="Write a comment...">
                <button>Post</button>
            </div>
        `;

        setupPostInteractions(postElement);
        postsContainer.appendChild(postElement);
    });
}

// Initialize tab navigation for alerts and other sections
function initTabNavigation() {
    // Alert tabs
    document.querySelectorAll('.alert-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab
            document.querySelectorAll('.alert-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show selected tab content
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            const tabContent = document.getElementById(tabId + '-tab');
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });
    function initTabNavigation() {
        const tabs = document.querySelectorAll('.alert-tab');
        const contents = document.querySelectorAll('.tab-content');
    
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');
    
                // Remove active from all
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
    
                // Add active to selected
                tab.classList.add('active');
                document.querySelector(`.${target}-tab`).classList.add('active');
            });
        });
    }
    
    // Community tabs
   // Community tabs
document.querySelectorAll('.community-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.community-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // Get the category from tab text and load appropriate posts
        const category = this.textContent.trim().toLowerCase();
        loadCommunityPostsByCategory(category);
    });
});
    
    // Resource categories
    document.querySelectorAll('.resource-category').forEach(category => {
        category.addEventListener('click', function() {
            document.querySelectorAll('.resource-category').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            // In a real app, this would filter the resources
        });
    });
    
    // Notification filters
// Notification filters with category filtering logic
document.querySelectorAll('.notification-filters .filter').forEach(filter => {
    filter.addEventListener('click', function () {
        const selected = this.textContent.trim().toLowerCase();

        // Update active tab
        document.querySelectorAll('.notification-filters .filter').forEach(f => f.classList.remove('active'));
        this.classList.add('active');

        // Filter alert items
        const items = document.querySelectorAll('.notifications-list .notification-item');
        const headers = document.querySelectorAll('.notifications-list h3');

        items.forEach(item => {
            const type = item.getAttribute('data-type');
            item.style.display = (selected === 'all' || selected === type) ? 'flex' : 'none';
        });

        headers.forEach(header => {
            const category = header.textContent.trim().toLowerCase();
            const hasVisible = Array.from(items).some(item => {
                return item.style.display !== 'none' && item.getAttribute('data-type') === category;
            });
            header.style.display = (selected === 'all' || hasVisible) ? 'block' : 'none';
        });
    });
});

}
function initNotificationCategoryFilters() {
    const filters = document.querySelectorAll('.notification-filters .filter');
    const items = document.querySelectorAll('.notifications-list .notification-item');
    const headers = document.querySelectorAll('.notifications-list h3');

    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            const selected = filter.textContent.trim().toLowerCase();

            // Highlight selected filter
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');

            items.forEach(item => {
                const type = item.getAttribute('data-type');
                if (selected === 'all' || selected === type) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });

            headers.forEach(header => {
                const category = header.textContent.trim().toLowerCase();
                const shouldShow = selected === 'all' || category === selected;

                // Only show header if it has at least one visible item
                const hasVisibleItems = Array.from(items).some(item => {
                    const type = item.getAttribute('data-type');
                    return item.style.display !== 'none' && type === category;
                });

                header.style.display = shouldShow && hasVisibleItems ? 'block' : 'none';
            });
        });
    });
}


// Load community posts
function loadCommunityPosts() {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) return;
    
    // Clear existing posts
    postsContainer.innerHTML = '';
    
    // Add style for character avatars in posts if it doesn't exist
    if (!document.getElementById('post-avatar-style')) {
        const style = document.createElement('style');
        style.id = 'post-avatar-style';
        style.textContent = `
            .post-avatar {
                background-color: transparent;
                border: none;
            }
            .post-avatar-character {
                width: 100%;
                height: 100%;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            .post-avatar-character.olive {
                background-image: url('olive.png');
            }
            .post-avatar-character.pinky {
                background-image: url('pinky.png');
            }
            .post-avatar-character.boxo {
                background-image: url('boxo.png');
            }
            .post-avatar-character.trigo {
                background-image: url('trigo.png');
            }
            .post-avatar-character.ghost {
                background-image: url('ghost.png');
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add sample posts
    communityPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        // Create avatar with character image
        const avatarHTML = `<div class="post-avatar"><div class="post-avatar-character ${post.avatar}"></div></div>`;
        
        postElement.innerHTML = `
            <div class="post-header">
                ${avatarHTML}
                <div class="post-info">
                    <div class="post-author">${post.author}</div>
                    <div class="post-time">${post.time} • ${post.characterName}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <div class="post-action">
                    <i class="fas fa-thumbs-up"></i>
                    <span>${post.likes}</span>
                </div>
                <div class="post-action">
                    <i class="fas fa-comment"></i>
                    <span>${post.comments}</span>
                </div>
                <div class="post-action">
                    <i class="fas fa-share"></i>
                    <span>Share</span>
                </div>
            </div>
        `;
        
        postsContainer.appendChild(postElement);
    });
}
// Sample community posts by category
// Replace the current communityPostsByCategory object with this expanded version
const communityPostsByCategory = {
    childcare: [
        {
            author: "Maria Garcia",
            avatar: "olive",
            characterName: "Olive",
            time: "15 minutes ago",
            content: "Anyone available to watch the kids at 505 Willow Street for a few hours? I need to check on my parents across town.",
            likes: 3,
            comments: 2
        },
        {
            author: "John Lee",
            avatar: "boxo",
            characterName: "Boxo",
            time: "1 hour ago",
            content: "We've set up a playgroup at the community center (303 Maple Drive) from 2-4pm daily. Kids can play while parents take turns running errands.",
            likes: 15,
            comments: 7
        },
        {
            author: "Rachel Sanders",
            avatar: "pinky",
            characterName: "Pinky",
            time: "2 hours ago",
            content: "Looking for children's books to keep the little ones entertained. Anyone have extras to share? We're at 101 Elm Street, Apt 3B.",
            likes: 8,
            comments: 4
        },
        {
            author: "Marcus Johnson",
            avatar: "ghost",
            characterName: "Ghost",
            time: "Yesterday",
            content: "Does anyone have size 4T clothes they can spare? Our daughter has outgrown her clothes and we couldn't grab much during evacuation.",
            likes: 10,
            comments: 6
        },
        {
            author: "Lisa Wong",
            avatar: "trigo",
            characterName: "Trigo",
            time: "Yesterday",
            content: "Organizing a kids' movie night at 303 Maple Drive community room, 6pm tomorrow. Bring blankets and pillows. All children welcome!",
            likes: 22,
            comments: 9
        }
    ],
    support: [
        {
            author: "David Chen",
            avatar: "boxo",
            characterName: "Boxo",
            time: "35 minutes ago",
            content: "Power is back on at Pine Boulevard! Should be restored to the whole block within an hour according to the crew on site.",
            likes: 27,
            comments: 5
        },
        {
            author: "Aisha Johnson",
            avatar: "pinky",
            characterName: "Pinky",
            time: "2 hours ago",
            content: "Mental health check-in: How is everyone holding up? Remember it's okay to not be okay. We're here for each other.",
            likes: 31,
            comments: 12
        },
        {
            author: "Thomas Rivera",
            avatar: "ghost",
            characterName: "Ghost",
            time: "3 hours ago",
            content: "My grandmother needs her medication refilled. Pharmacy at Cedar Lane is closed. Does anyone know which pharmacies are open?",
            likes: 14,
            comments: 8
        },
        {
            author: "Sophia Lee",
            avatar: "olive",
            characterName: "Olive",
            time: "Yesterday",
            content: "Elderly neighbors at 707 Birch Avenue need help clearing debris from their yard. If anyone has a couple hours to spare, please message me.",
            likes: 19,
            comments: 7
        },
        {
            author: "James Wilson",
            avatar: "trigo",
            characterName: "Trigo",
            time: "2 days ago",
            content: "Lost our family dog during evacuation. Medium-sized brown lab mix with a blue collar. Last seen near 456 Oak Avenue. Please call 555-7890 if spotted.",
            likes: 43,
            comments: 15
        }
    ],
    explanations: [
        {
            author: "Prof. Sunil Patel",
            avatar: "trigo",
            characterName: "Trigo",
            time: "1 day ago",
            content: "Water outages explained: The main pump station at 7th & Oak lost power. City workers are installing generators. Should be back online by tomorrow morning.",
            likes: 42,
            comments: 8
        },
        {
            author: "Sarah Miller",
            avatar: "ghost",
            characterName: "Ghost",
            time: "3 hours ago",
            content: "For those asking about the helicopter noise - it's the power company surveying damaged lines. Nothing to worry about!",
            likes: 19,
            comments: 4
        },
        {
            author: "Dr. Emily Rodriguez",
            avatar: "olive",
            characterName: "Olive",
            time: "Yesterday",
            content: "Why water needs to be boiled: The treatment plant is running on backup power, which means lower pressure in the system. This can allow contaminants to enter the pipes. Boil for at least 3 minutes.",
            likes: 37,
            comments: 11
        },
        {
            author: "Michael Chang",
            avatar: "boxo",
            characterName: "Boxo",
            time: "2 days ago",
            content: "Timeline update: Repairs to the main power substation are 70% complete. Utility company estimates full restoration to our neighborhood within 36-48 hours.",
            likes: 51,
            comments: 23
        },
        {
            author: "City Emergency Services",
            avatar: "pinky",
            characterName: "Pinky",
            time: "3 days ago",
            content: "Road closure information: Main Street remains closed between 1st and 5th Avenues due to downed power lines. Use Pine Boulevard or Cedar Lane as alternatives.",
            likes: 29,
            comments: 7
        }
    ],
    skills: [
        {
            author: "Emma Johnson",
            avatar: "olive",
            characterName: "Olive",
            time: "2 hours ago",
            content: "I've set up a charging station in the lobby of 101 Elm Street. Feel free to stop by if you need to charge your devices. I can also show you how to set up your own using car batteries!",
            likes: 18,
            comments: 3
        },
        {
            author: "Miguel Sanchez",
            avatar: "ghost",
            characterName: "Ghost",
            time: "1 day ago",
            content: "Quick tip: Your fridge will stay cold for 4 hours if you keep it closed. Freezer stays frozen for 48 hours if full, 24 if half-empty.",
            likes: 35,
            comments: 6
        },
        {
            author: "Brian Taylor",
            avatar: "boxo",
            characterName: "Boxo",
            time: "Yesterday",
            content: "Workshop at 3pm tomorrow: I'll be teaching basic plumbing repairs at the community center. Learn how to fix leaks and conserve water during the outage.",
            likes: 27,
            comments: 13
        },
        {
            author: "Samantha Patel",
            avatar: "pinky",
            characterName: "Pinky",
            time: "2 days ago",
            content: "Solar cooking tip: Line a box with aluminum foil and cover with glass or clear plastic. Place dark pot inside. Food will cook slowly but safely with no power needed!",
            likes: 41,
            comments: 16
        },
        {
            author: "Daniel Kim",
            avatar: "trigo",
            characterName: "Trigo",
            time: "3 days ago",
            content: "How to purify water without boiling: Add 8 drops of regular unscented bleach per gallon, stir well, and let stand for 30 minutes. Should smell slightly of chlorine.",
            likes: 56,
            comments: 18
        }
    ],
    resources: [
        {
            author: "Karen Wu",
            avatar: "trigo",
            characterName: "Trigo",
            time: "4 hours ago",
            content: "The corner store at 909 Cypress Lane still has bottled water and batteries in stock. They're limiting 2 packs per family.",
            likes: 29,
            comments: 14
        },
        {
            author: "Robert Taylor",
            avatar: "pinky",
            characterName: "Pinky",
            time: "Yesterday",
            content: "I have extra flashlights and portable phone chargers to share. Message me if you need one - I'm at 123 Main Street, Apt 4B.",
            likes: 22,
            comments: 9
        },
        {
            author: "Neighborhood Aid Group",
            avatar: "boxo",
            characterName: "Boxo",
            time: "5 hours ago",
            content: "Food distribution at Elementary School gymnasium (202 Cedar Lane) from 11am-2pm. They have ready-to-eat meals, bread, and canned goods.",
            likes: 47,
            comments: 11
        },
        {
            author: "Jennifer Adams",
            avatar: "olive",
            characterName: "Olive",
            time: "Yesterday",
            content: "FEMA representatives will be at the community center (303 Maple Drive) tomorrow from 9am-5pm to help with disaster assistance applications.",
            likes: 38,
            comments: 15
        },
        {
            author: "Carlos Rodriguez",
            avatar: "ghost",
            characterName: "Ghost",
            time: "2 days ago",
            content: "Free medical clinic set up at the high school gym (505 Willow St). Doctors available from 8am-8pm. They have basic medications and can handle non-emergency situations.",
            likes: 61,
            comments: 27
        }
    ]
};
// Load community posts by category
function loadCommunityPosts() {
    const postsContainer = document.getElementById('postsContainer');
    if (!postsContainer) return;

    postsContainer.innerHTML = '';

    if (!document.getElementById('post-avatar-style')) {
        const style = document.createElement('style');
        style.id = 'post-avatar-style';
        style.textContent = `
            .post-avatar-character {
                width: 100%;
                height: 100%;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            .post-avatar-character.olive { background-image: url('olive.png'); }
            .post-avatar-character.pinky { background-image: url('pinky.png'); }
            .post-avatar-character.boxo { background-image: url('boxo.png'); }
            .post-avatar-character.trigo { background-image: url('trigo.png'); }
            .post-avatar-character.ghost { background-image: url('ghost.png'); }
            .comment-input {
                margin-top: 10px;
                display: flex;
                gap: 5px;
            }
            .comment-input input {
                flex: 1;
                padding: 6px 10px;
                border-radius: 5px;
                border: none;
                outline: none;
            }
            .comment-input button {
                padding: 6px 12px;
                border: none;
                border-radius: 5px;
                background-color: #00ccff;
                color: black;
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);
    }

    communityPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <div class="post-header">
                <div class="post-avatar"><div class="post-avatar-character ${post.avatar}"></div></div>
                <div class="post-info">
                    <div class="post-author">${post.author}</div>
                    <div class="post-time">${post.time} • ${post.characterName}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <div class="post-action like-action">
                    <i class="fas fa-thumbs-up"></i>
                    <span>${post.likes}</span>
                </div>
                <div class="post-action comment-action">
                    <i class="fas fa-comment"></i>
                    <span>${post.comments}</span>
                </div>
                <div class="post-action share-action">
                    <i class="fas fa-share"></i>
                    <span>Share</span>
                </div>
            </div>
            <div class="comment-input" style="display:none;">
                <input type="text" placeholder="Write a comment...">
                <button>Post</button>
            </div>
        `;

        setupPostInteractions(postElement);
        postsContainer.appendChild(postElement);
    });
}

// Profile Photo Upload Feature

// Toast message system
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// Battery Saver Mode
function toggleBatterySaver(enable) {
    const indicator = document.querySelector('.battery-saver-mode');
    if (indicator) {
        indicator.style.display = enable ? 'flex' : 'none';
    }
}

// Connectivity checking
function checkConnectivity() {
    const isOnline = navigator.onLine;
    if (!isOnline) {
        showToast('You are offline. Watch Tower will use cached data.');
    }
    return isOnline;
}

// Set active nav button
function setActiveNavItem(itemId) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const navItem = document.getElementById(itemId);
    if (navItem) {
        navItem.classList.add('active');
    }
}

// Pink, Yellow, and Blue monochrome theme for Google Maps
// Monochrome Blue-Grey theme for Google Maps
const pinkYellowBlueMapStyle = [
    { elementType: "geometry", stylers: [{ color: "#0a0f1a" }] }, // Dark blue base
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#8596a8" }] }, // Blue-gray text
    { elementType: "labels.text.stroke", stylers: [{ color: "#000033" }] }, // Dark blue text stroke
    
    // Administrative areas
    { featureType: "administrative", elementType: "geometry", stylers: [{ color: "#4a6c8c" }] }, // Blue-gray administrative
    { featureType: "administrative.land_parcel", stylers: [{ visibility: "off" }] },
    { featureType: "administrative.neighborhood", stylers: [{ visibility: "off" }] },
    
    // POIs
    { featureType: "poi", elementType: "geometry", stylers: [{ color: "#1a2635" }] }, // Deep blue-gray
    { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#6c7e92" }] }, // Light blue-gray labels
    { featureType: "poi.park", elementType: "geometry", stylers: [{ color: "#162536" }] }, // Dark blue-gray parks
    { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#4a6c8c" }] }, // Blue-gray labels
    
    // Roads
    { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#3a5f84" }] }, // Blue-gray roads
    { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#2d4a68" }] }, // Darker blue-gray outline
    { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#8596a8" }] }, // Blue-gray text
    { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#3a5f84" }] }, // Medium blue-gray
    { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#4a6c8c" }] }, // Blue-gray highways
    { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#2d4a68" }] }, // Darker blue-gray outline
    { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#253546" }] }, // Light blue-gray local roads
    
    // Transit
    { featureType: "transit", elementType: "geometry", stylers: [{ color: "#1a2635" }] }, // Blue-gray transit
    
    // Water
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e1621" }] }, // Dark blue water
    { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4a6c8c" }] } // Blue-gray labels
];

// Sample reminders data
let reminders = [
    {
        id: 1,
        title: "Fill Water Containers",
        description: "Fill all containers before scheduled water maintenance",
        date: "2025-05-01",
        time: "08:00",
        type: "water"
    },
    {
        id: 2,
        title: "Charge Devices",
        description: "Charge all devices before scheduled power maintenance",
        date: "2025-05-02",
        time: "19:00",
        type: "power"
    }
];
function initReportWorkingButton() {
    const reportWorkingBtn = document.getElementById('reportWorkingBtn');
    if (reportWorkingBtn) {
        reportWorkingBtn.addEventListener('click', function() {
            showToast('Status reported as working. Thank you!');
            // Close the panel after reporting
            closePanel();
        });
    }

};

waterMarker.addListener('click', () => {
    showBuildingDetails(building);
});
// Initialize reminders and outage reporting functionality
function initAlertsTab() {
    // Display reminders when the tab is clicked
    document.querySelectorAll('.alert-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            if (tabId === 'reminders') {
                loadReminders();
            }
        });
    });
    
    // Add reminder button click handler
    const addReminderBtn = document.getElementById('addReminderBtn');
    if (addReminderBtn) {
        addReminderBtn.addEventListener('click', addReminder);
    }
    
    // Submit outage report button click handler
    const submitOutageBtn = document.getElementById('submitOutageBtn');
    if (submitOutageBtn) {
        submitOutageBtn.addEventListener('click', submitOutageReport);
    }
    
    // Pre-populate date fields with current date
    const currentDate = new Date();
    const outageDate = document.getElementById('outageDate');
    if (outageDate) {
        outageDate.valueAsDate = currentDate;
    }
    
    // Pre-select the current month and year in reminder form
    const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
    const currentYear = currentDate.getFullYear();
    const reminderMonth = document.getElementById('reminderMonth');
    const reminderYear = document.getElementById('reminderYear');
    
    if (reminderMonth) {
        reminderMonth.value = currentMonth.toString();
    }
    
    if (reminderYear) {
        // Find and select the current year option
        const yearOptions = reminderYear.options;
        for (let i = 0; i < yearOptions.length; i++) {
            if (yearOptions[i].value === currentYear.toString()) {
                reminderYear.selectedIndex = i;
                break;
            }
        }
    }
}

// Load and display reminders
function loadReminders() {
    const remindersList = document.getElementById('remindersList');
    if (!remindersList) return;
    
    // Clear existing reminders
    remindersList.innerHTML = '';
    
    // Display message if no reminders
    if (reminders.length === 0) {
        remindersList.innerHTML = '<div class="no-reminders-message">No reminders set. Add a reminder below.</div>';
        return;
    }
    
    // Sort reminders by date and time
    reminders.sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA - dateB;
    });
    
    // Add reminders to the list
    reminders.forEach(reminder => {
        const reminderElement = document.createElement('div');
        reminderElement.className = 'reminder-item';
        
        // Format date for display
        const reminderDate = new Date(`${reminder.date}T${reminder.time}`);
        const formattedDate = reminderDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Get icon for reminder type
        let iconClass = 'fas fa-bell';
        if (reminder.type === 'water') iconClass = 'fas fa-tint';
        else if (reminder.type === 'power') iconClass = 'fas fa-bolt';
        else if (reminder.type === 'food') iconClass = 'fas fa-utensils';
        else if (reminder.type === 'medical') iconClass = 'fas fa-first-aid';
        
        reminderElement.innerHTML = `
            <div class="reminder-icon ${reminder.type}">
                <i class="${iconClass}"></i>
            </div>
            <div class="reminder-content">
                <div class="reminder-title">${reminder.title}</div>
                <div class="reminder-desc">${reminder.description}</div>
                <div class="reminder-date">${formattedDate}</div>
            </div>
            <div class="reminder-delete" data-id="${reminder.id}">
                <i class="fas fa-times"></i>
            </div>
        `;
        
        remindersList.appendChild(reminderElement);
    });
    
    // Add event listeners to delete buttons
    document.querySelectorAll('.reminder-delete').forEach(button => {
        button.addEventListener('click', function() {
            const reminderId = parseInt(this.getAttribute('data-id'));
            deleteReminder(reminderId);
        });
    });
}

// Add a new reminder
function addReminder() {
    const title = document.getElementById('reminderTitle').value;
    const description = document.getElementById('reminderDesc').value;
    const time = document.getElementById('reminderTime').value;
    const day = document.getElementById('reminderDay').value;
    const month = document.getElementById('reminderMonth').value;
    const year = document.getElementById('reminderYear').value;
    const type = document.getElementById('reminderType').value;
    
    // Validate inputs
    if (!title || !time || !day || !month || !year) {
        showToast('Please fill in all required fields');
        return;
    }
    
    // Format date as YYYY-MM-DD
    const formattedMonth = month.padStart(2, '0');
    const formattedDay = day.padStart(2, '0');
    const date = `${year}-${formattedMonth}-${formattedDay}`;
    
    // Create new reminder object
    const newReminder = {
        id: Date.now(), // Use timestamp as unique ID
        title,
        description,
        date,
        time,
        type
    };
    
    // Add to reminders array
    reminders.push(newReminder);
    
    // Persist to localStorage
    saveReminders();
    
    // Reload reminders list
    loadReminders();
    
    // Clear form
    clearReminderForm();
    
    // Show confirmation toast
    showToast('Reminder added successfully');
}

// Delete a reminder
function deleteReminder(id) {
    reminders = reminders.filter(reminder => reminder.id !== id);
    
    // Persist to localStorage
    saveReminders();
    
    // Reload reminders list
    loadReminders();
    
    // Show confirmation toast
    showToast('Reminder deleted');
}

// Clear reminder form
function clearReminderForm() {
    document.getElementById('reminderTitle').value = '';
    document.getElementById('reminderDesc').value = '';
    document.getElementById('reminderTime').value = '';
    document.getElementById('reminderDay').value = '';
    document.getElementById('reminderType').value = 'general';
}

// Save reminders to localStorage
function saveReminders() {
    localStorage.setItem('watchTowerReminders', JSON.stringify(reminders));
}

// Load reminders from localStorage
function loadRemindersFromStorage() {
    const savedReminders = localStorage.getItem('watchTowerReminders');
    if (savedReminders) {
        reminders = JSON.parse(savedReminders);
    }
}

// Submit outage report

function submitOutageReport() {
    const outageType = document.getElementById('outageType').value;
    const location = document.getElementById('outageLocation').value;
    const zipcode = document.getElementById('outageZipcode').value;
    const date = document.getElementById('outageDate').value;
    const time = document.getElementById('outageTime').value;
    const notes = document.getElementById('outageNotes').value;
    const affectsBuilding = document.getElementById('outageAffectsBuilding').checked;
    const affectsNeighborhood = document.getElementById('outageAffectsNeighborhood').checked;
    
    // Validate inputs
    if (!outageType || !location || !zipcode || !date || !time) {
        showToast('Please fill in all required fields');
        return;
    }
    
    // In a real app, this would submit the data to a server
    console.log('Outage report submitted:', {
        type: outageType,
        location,
        zipcode,
        date,
        time,
        notes,
        affectsBuilding,
        affectsNeighborhood
    });
    
    // Clear form
    clearOutageForm();
    
    // Show confirmation toast
    showToast('Outage report submitted successfully');
    
    // Switch to notifications tab
    const notificationsTab = document.querySelector('.alert-tab[data-tab="notifications"]');
    if (notificationsTab) {
        notificationsTab.click();
    }
}

// Clear outage report form
function clearOutageForm() {
    document.getElementById('outageType').value = '';
    document.getElementById('outageLocation').value = '';
    document.getElementById('outageZipcode').value = '';
    document.getElementById('outageNotes').value = '';
    document.getElementById('outageAffectsBuilding').checked = false;
    document.getElementById('outageAffectsNeighborhood').checked = false;
}

// Initialize community post functionality
function initCommunityPostFunctionality() {
    console.log("Initializing community post functionality");
    
    // Direct reference to create post button click handler
    const createPostBtn = document.querySelector('.create-post');
    if (createPostBtn) {
        console.log("Found create post button, adding click listener");
        createPostBtn.addEventListener('click', function() {
            console.log("Create post button clicked");
            // Get the modal
            const modal = document.getElementById('createPostModal');
            if (modal) {
                console.log("Showing modal");
                modal.classList.add('show');
            } else {
                console.error("Modal not found!");
            }
        });
    } else {
        console.error("Create post button not found!");
    }
    
    
    // Close buttons for modal
    const closePostModal = document.getElementById('closePostModal');
    if (closePostModal) {
        closePostModal.addEventListener('click', function() {
            const modal = document.getElementById('createPostModal');
            if (modal) {
                modal.classList.remove('show');
            }
        });
    }
    
    const cancelPostBtn = document.getElementById('cancelPostBtn');
    if (cancelPostBtn) {
        cancelPostBtn.addEventListener('click', function() {
            const modal = document.getElementById('createPostModal');
            if (modal) {
                modal.classList.remove('show');
            }
        });
    }
    
    // Submit post button
    const submitPostBtn = document.getElementById('submitPostBtn');
    if (submitPostBtn) {
        submitPostBtn.addEventListener('click', function() {
            const content = document.getElementById('postContent').value.trim();
            const category = document.getElementById('postCategory').value;
        
            if (!content) {
                showToast('Please enter post content');
                return;
            }
        
            const userName = localStorage.getItem('userName') || 'User';
            const selectedCharacter = localStorage.getItem('selectedCharacter') || 'olive';
            const newPost = {
                author: userName,
                avatar: selectedCharacter,
                characterName: selectedCharacter.charAt(0).toUpperCase() + selectedCharacter.slice(1),
                time: "Just now",
                content: content,
                likes: 0,
                comments: 0
            };
        
            // Add to the appropriate category
            if (!communityPostsByCategory[category]) {
                communityPostsByCategory[category] = [];
            }
            communityPostsByCategory[category].unshift(newPost);
        
            // Update UI
            loadCommunityPostsByCategory(category);
        
            // Close modal
            document.getElementById('createPostModal').classList.remove('show');
        
            // Reset input
            document.getElementById('postContent').value = '';
        
            // Feedback
            showToast('Your post has been published');
        });
        
    
    }}


    // Load Google Translate API script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit&key=AIzaSyDkXUbDakCzPYIwbd15orQsH8waxiMLfhk';
    document.body.appendChild(script);

// Add to document ready function or call directly
document.addEventListener('DOMContentLoaded', () => {
    // Initialize translation feature
    initTranslationFeature();
});

// Add this function to handle post interactions
function setupPostInteractions(postElement) {
    // Thumbs up button
    const likeButton = postElement.querySelector('.post-action:nth-child(1)');
    const likeCount = likeButton.querySelector('span');
    let liked = false;
    
    likeButton.addEventListener('click', function() {
        if (!liked) {
            // Increment like count
            const currentLikes = parseInt(likeCount.textContent);
            likeCount.textContent = (currentLikes + 1).toString();
            
            // Change icon color
            likeButton.querySelector('i').style.color = '#00ff66'; // Green color
            liked = true;
            showToast('Post liked!');
        } else {
            // Decrement like count
            const currentLikes = parseInt(likeCount.textContent);
            likeCount.textContent = (currentLikes - 1).toString();
            
            // Reset icon color
            likeButton.querySelector('i').style.color = '';
            liked = false;
            showToast('Like removed');
        }
    });
    
    // Comment button
    const commentButton = postElement.querySelector('.post-action:nth-child(2)');
    commentButton.addEventListener('click', function() {
        // Create and show comment modal
        showCommentModal(postElement);
    });
    
    // Share button
    const shareButton = postElement.querySelector('.post-action:nth-child(3)');
    shareButton.addEventListener('click', function() {
        // Create and show share modal
        showShareModal(postElement);
    });
}

// Show comment modal
function showCommentModal(postElement) {
    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'commentModal';
    
    const postAuthor = postElement.querySelector('.post-author').textContent;
    const postContent = postElement.querySelector('.post-content').textContent;
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add Comment</h2>
                <button class="modal-close" id="closeCommentModal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="post-preview">
                    <div class="post-preview-header">
                        <div class="post-preview-category">${postAuthor}</div>
                    </div>
                    <div class="post-preview-content">${postContent.substring(0, 100)}${postContent.length > 100 ? '...' : ''}</div>
                </div>
                <div class="form-group" style="margin-top: 20px;">
                    <label for="commentText">Your Comment</label>
                    <textarea id="commentText" placeholder="Write your comment here..."></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button class="modal-btn secondary" id="cancelCommentBtn">Cancel</button>
                <button class="modal-btn primary" id="submitCommentBtn">Post Comment</button>
            </div>
        </div>
    `;
    
    // Add modal to document
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Add event listeners
    document.getElementById('closeCommentModal').addEventListener('click', function() {
        closeModal(modal);
    });
    
    document.getElementById('cancelCommentBtn').addEventListener('click', function() {
        closeModal(modal);
    });
    
    document.getElementById('submitCommentBtn').addEventListener('click', function() {
        const commentText = document.getElementById('commentText').value;
        if (commentText.trim() === '') {
            showToast('Please enter a comment');
            return;
        }
        
        // Increment comment count
        const commentCount = postElement.querySelector('.post-action:nth-child(2) span');
        const currentComments = parseInt(commentCount.textContent);
        commentCount.textContent = (currentComments + 1).toString();
        
        // Show toast
        showToast('Comment posted!');
        
        // Close modal
        closeModal(modal);
    });
}

// Show share modal
function showShareModal(postElement) {
    // Create modal HTML
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'shareModal';
    
    const postAuthor = postElement.querySelector('.post-author').textContent;
    const postContent = postElement.querySelector('.post-content').textContent;
    
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Share Post</h2>
                <button class="modal-close" id="closeShareModal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="post-preview">
                    <div class="post-preview-header">
                        <div class="post-preview-category">${postAuthor}</div>
                    </div>
                    <div class="post-preview-content">${postContent.substring(0, 100)}${postContent.length > 100 ? '...' : ''}</div>
                </div>
                <div class="form-group" style="margin-top: 20px;">
                    <label>Share Options</label>
                    <div style="display: flex; justify-content: space-around; margin-top: 15px;">
                        <div style="text-align: center; cursor: pointer;">
                            <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(59, 89, 152, 0.2); display: flex; justify-content: center; align-items: center; margin: 0 auto;">
                                <i class="fab fa-facebook-f" style="color: #3b5998;"></i>
                            </div>
                            <div style="margin-top: 8px; font-size: 12px;">Facebook</div>
                        </div>
                        <div style="text-align: center; cursor: pointer;">
                            <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(0, 172, 238, 0.2); display: flex; justify-content: center; align-items: center; margin: 0 auto;">
                                <i class="fab fa-twitter" style="color: #00acee;"></i>
                            </div>
                            <div style="margin-top: 8px; font-size: 12px;">Twitter</div>
                        </div>
                        <div style="text-align: center; cursor: pointer;">
                            <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(0, 132, 255, 0.2); display: flex; justify-content: center; align-items: center; margin: 0 auto;">
                                <i class="fas fa-comment" style="color: #0084ff;"></i>
                            </div>
                            <div style="margin-top: 8px; font-size: 12px;">Message</div>
                        </div>
                        <div style="text-align: center; cursor: pointer;">
                            <div style="width: 50px; height: 50px; border-radius: 50%; background: rgba(118, 125, 133, 0.2); display: flex; justify-content: center; align-items: center; margin: 0 auto;">
                                <i class="fas fa-envelope" style="color: #767d85;"></i>
                            </div>
                            <div style="margin-top: 8px; font-size: 12px;">Email</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="modal-btn secondary" id="cancelShareBtn">Cancel</button>
            </div>
        </div>
    `;
    
    // Add modal to document
    document.body.appendChild(modal);
    
    // Show modal
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Add event listeners
    document.getElementById('closeShareModal').addEventListener('click', function() {
        closeModal(modal);
    });
    
    document.getElementById('cancelShareBtn').addEventListener('click', function() {
        closeModal(modal);
    });
    
    // Add click handlers for share options
    const shareOptions = modal.querySelectorAll('.modal-body > .form-group > div > div');
    shareOptions.forEach(option => {
        option.addEventListener('click', function() {
            showToast('Shared successfully!');
            closeModal(modal);
        });
    });
}

// Close modal helper
function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        document.body.removeChild(modal);
    }, 300); // Wait for transition to complete
}
function setupPostInteractions(postElement) {
    const likeBtn = postElement.querySelector('.like-action');
    const commentBtn = postElement.querySelector('.comment-action');
    const shareBtn = postElement.querySelector('.share-action');

    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            likeBtn.classList.toggle('active');
            const icon = likeBtn.querySelector('i');
            const span = likeBtn.querySelector('span');
            icon.style.color = likeBtn.classList.contains('active') ? '#00ff66' : '#999';
            let count = parseInt(span.textContent, 10);
            span.textContent = likeBtn.classList.contains('active') ? count + 1 : count - 1;
        });
    }

    if (commentBtn) {
        commentBtn.addEventListener('click', () => {
            showToast("Opening comments... (feature coming soon!)");
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            showToast("Sharing post... (feature coming soon!)");
        });
    }
}
function setupPostInteractions(postElement) {
    const likeBtn = postElement.querySelector('.like-action');
    const commentBtn = postElement.querySelector('.comment-action');
    const shareBtn = postElement.querySelector('.share-action');
    const commentBox = postElement.querySelector('.comment-input');
    const commentInput = commentBox?.querySelector('input');
    const commentPostBtn = commentBox?.querySelector('button');
    const commentCount = commentBtn.querySelector('span');

    // Like
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('active');
        const icon = likeBtn.querySelector('i');
        const span = likeBtn.querySelector('span');
        icon.style.color = likeBtn.classList.contains('active') ? '#00ff66' : '#999';
        let count = parseInt(span.textContent, 10);
        span.textContent = likeBtn.classList.contains('active') ? count + 1 : count - 1;
    });

    // Show comment box
    commentBtn.addEventListener('click', () => {
        commentBox.style.display = commentBox.style.display === 'none' ? 'flex' : 'none';
    });

    // Post comment
    commentPostBtn.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (text !== '') {
            showToast("Comment posted: " + text);
            commentInput.value = '';
            let count = parseInt(commentCount.textContent, 10);
            commentCount.textContent = count + 1;
        }
    });

    // Share
    shareBtn.addEventListener('click', () => {
        const dummyLink = "https://watchtower.app/post/" + Math.floor(Math.random() * 10000);
        navigator.clipboard.writeText(dummyLink).then(() => {
            showToast("Post link copied: " + dummyLink);
        });
    });
}





