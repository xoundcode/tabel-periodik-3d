// Definisi Warna Kategori sesuai legenda di foto
const C_ALKALI = "rgba(28, 117, 138, 0.8)";         // Biru muda / Teal
const C_ALKALITANAH = "rgba(138, 43, 43, 0.8)";     // Merah bata
const C_TRANSISI = "rgba(92, 73, 122, 0.8)";        // Ungu
const C_PASCATRANSISI = "rgba(45, 107, 94, 0.8)";   // Hijau tua
const C_METALOID = "rgba(122, 102, 41, 0.8)";       // Zaitun / Coklat kehijauan
const C_NONLOGAM = "rgba(26, 64, 115, 0.8)";        // Biru tua
const C_GASMULIA = "rgba(115, 32, 52, 0.8)";        // Merah tua / Maroon
const C_LANTANIDA = "rgba(0, 80, 130, 0.8)";        // Biru
const C_AKTINIDA = "rgba(115, 62, 28, 0.8)";        // Coklat
const C_UNKNOWN = "rgba(77, 77, 77, 0.8)";          // Abu-abu

// Format: "Simbol", "Nama (ID)", "Massa", Kolom, Baris, Warna Kategori
const table = [
    "H", "Hidrogen", "1.008", 1, 1, C_NONLOGAM,
    "He", "Helium", "4.003", 18, 1, C_GASMULIA,
    "Li", "Litium", "6.94", 1, 2, C_ALKALI,
    "Be", "Berilium", "9.012", 2, 2, C_ALKALITANAH,
    "B", "Boron", "10.81", 13, 2, C_METALOID,
    "C", "Karbon", "12.011", 14, 2, C_NONLOGAM,
    "N", "Nitrogen", "14.007", 15, 2, C_NONLOGAM,
    "O", "Oksigen", "15.999", 16, 2, C_NONLOGAM,
    "F", "Fluorin", "18.998", 17, 2, C_NONLOGAM,
    "Ne", "Neon", "20.180", 18, 2, C_GASMULIA,
    "Na", "Natrium", "22.990", 1, 3, C_ALKALI,
    "Mg", "Magnesium", "24.305", 2, 3, C_ALKALITANAH,
    "Al", "Aluminium", "26.982", 13, 3, C_PASCATRANSISI,
    "Si", "Silikon", "28.085", 14, 3, C_METALOID,
    "P", "Fosforus", "30.974", 15, 3, C_NONLOGAM,
    "S", "Belerang", "32.06", 16, 3, C_NONLOGAM,
    "Cl", "Klorin", "35.45", 17, 3, C_NONLOGAM,
    "Ar", "Argon", "39.95", 18, 3, C_GASMULIA,
    "K", "Kalium", "39.098", 1, 4, C_ALKALI,
    "Ca", "Kalsium", "40.078", 2, 4, C_ALKALITANAH,
    "Sc", "Skandium", "44.956", 3, 4, C_TRANSISI,
    "Ti", "Titanium", "47.867", 4, 4, C_TRANSISI,
    "V", "Vanadium", "50.942", 5, 4, C_TRANSISI,
    "Cr", "Kromium", "51.996", 6, 4, C_TRANSISI,
    "Mn", "Mangan", "54.938", 7, 4, C_TRANSISI,
    "Fe", "Besi", "55.845", 8, 4, C_TRANSISI,
    "Co", "Kobalt", "58.933", 9, 4, C_TRANSISI,
    "Ni", "Nikel", "58.693", 10, 4, C_TRANSISI,
    "Cu", "Tembaga", "63.546", 11, 4, C_TRANSISI,
    "Zn", "Seng", "65.38", 12, 4, C_TRANSISI,
    "Ga", "Galium", "69.723", 13, 4, C_PASCATRANSISI,
    "Ge", "Germanium", "72.630", 14, 4, C_METALOID,
    "As", "Arsen", "74.922", 15, 4, C_METALOID,
    "Se", "Selenium", "78.971", 16, 4, C_NONLOGAM,
    "Br", "Bromin", "79.904", 17, 4, C_NONLOGAM,
    "Kr", "Kripton", "83.798", 18, 4, C_GASMULIA,
    "Rb", "Rubidium", "85.468", 1, 5, C_ALKALI,
    "Sr", "Stronsium", "87.62", 2, 5, C_ALKALITANAH,
    "Y", "Itrium", "88.906", 3, 5, C_TRANSISI,
    "Zr", "Zirkonium", "91.224", 4, 5, C_TRANSISI,
    "Nb", "Niobium", "92.906", 5, 5, C_TRANSISI,
    "Mo", "Molibdenum", "95.95", 6, 5, C_TRANSISI,
    "Tc", "Teknesium", "98", 7, 5, C_TRANSISI,
    "Ru", "Rutenium", "101.07", 8, 5, C_TRANSISI,
    "Rh", "Rodium", "102.91", 9, 5, C_TRANSISI,
    "Pd", "Paladium", "106.42", 10, 5, C_TRANSISI,
    "Ag", "Perak", "107.87", 11, 5, C_TRANSISI,
    "Cd", "Kadmium", "112.41", 12, 5, C_TRANSISI,
    "In", "Indium", "114.82", 13, 5, C_PASCATRANSISI,
    "Sn", "Timah", "118.71", 14, 5, C_PASCATRANSISI,
    "Sb", "Antimon", "121.76", 15, 5, C_METALOID,
    "Te", "Telurium", "127.60", 16, 5, C_METALOID,
    "I", "Iodin", "126.90", 17, 5, C_NONLOGAM,
    "Xe", "Xenon", "131.29", 18, 5, C_GASMULIA,
    "Cs", "Sesium", "132.91", 1, 6, C_ALKALI,
    "Ba", "Barium", "137.33", 2, 6, C_ALKALITANAH,
    "La", "Lantanum", "138.91", 3, 6, C_LANTANIDA,
    "Ce", "Serium", "140.12", 4, 9, C_LANTANIDA,
    "Pr", "Praseodimium", "140.91", 5, 9, C_LANTANIDA,
    "Nd", "Neodimium", "144.24", 6, 9, C_LANTANIDA,
    "Pm", "Prometium", "145", 7, 9, C_LANTANIDA,
    "Sm", "Samarium", "150.36", 8, 9, C_LANTANIDA,
    "Eu", "Europium", "151.96", 9, 9, C_LANTANIDA,
    "Gd", "Gadolinium", "157.25", 10, 9, C_LANTANIDA,
    "Tb", "Terbium", "158.93", 11, 9, C_LANTANIDA,
    "Dy", "Disprosium", "162.50", 12, 9, C_LANTANIDA,
    "Ho", "Holmium", "164.93", 13, 9, C_LANTANIDA,
    "Er", "Erbium", "167.26", 14, 9, C_LANTANIDA,
    "Tm", "Tulium", "168.93", 15, 9, C_LANTANIDA,
    "Yb", "Iterbium", "173.05", 16, 9, C_LANTANIDA,
    "Lu", "Lutesium", "174.97", 17, 9, C_LANTANIDA,
    "Hf", "Hafnium", "178.49", 4, 6, C_TRANSISI,
    "Ta", "Tantalum", "180.95", 5, 6, C_TRANSISI,
    "W", "Wolfram", "183.84", 6, 6, C_TRANSISI,
    "Re", "Renium", "186.21", 7, 6, C_TRANSISI,
    "Os", "Osmium", "190.23", 8, 6, C_TRANSISI,
    "Ir", "Iridium", "192.22", 9, 6, C_TRANSISI,
    "Pt", "Platina", "195.08", 10, 6, C_TRANSISI,
    "Au", "Emas", "196.97", 11, 6, C_TRANSISI,
    "Hg", "Raksa", "200.59", 12, 6, C_TRANSISI,
    "Tl", "Talium", "204.38", 13, 6, C_PASCATRANSISI,
    "Pb", "Timbal", "207.2", 14, 6, C_PASCATRANSISI,
    "Bi", "Bismut", "208.98", 15, 6, C_PASCATRANSISI,
    "Po", "Polonium", "209", 16, 6, C_PASCATRANSISI,
    "At", "Astatin", "210", 17, 6, C_METALOID,
    "Rn", "Radon", "222", 18, 6, C_GASMULIA,
    "Fr", "Fransium", "223", 1, 7, C_ALKALI,
    "Ra", "Radium", "226", 2, 7, C_ALKALITANAH,
    "Ac", "Aktinium", "227", 3, 7, C_AKTINIDA,
    "Th", "Torium", "232.04", 4, 10, C_AKTINIDA,
    "Pa", "Protaktinium", "231.04", 5, 10, C_AKTINIDA,
    "U", "Uranium", "238.03", 6, 10, C_AKTINIDA,
    "Np", "Neptunium", "237", 7, 10, C_AKTINIDA,
    "Pu", "Plutonium", "244", 8, 10, C_AKTINIDA,
    "Am", "Amerisium", "243", 9, 10, C_AKTINIDA,
    "Cm", "Kurium", "247", 10, 10, C_AKTINIDA,
    "Bk", "Berkelium", "247", 11, 10, C_AKTINIDA,
    "Cf", "Kalifornium", "251", 12, 10, C_AKTINIDA,
    "Es", "Einsteinium", "252", 13, 10, C_AKTINIDA,
    "Fm", "Fermium", "257", 14, 10, C_AKTINIDA,
    "Md", "Mendelevium", "258", 15, 10, C_AKTINIDA,
    "No", "Nobelium", "259", 16, 10, C_AKTINIDA,
    "Lr", "Lawrensium", "262", 17, 10, C_AKTINIDA,
    "Rf", "Ruterfordium", "267", 4, 7, C_TRANSISI,
    "Db", "Dubnium", "268", 5, 7, C_TRANSISI,
    "Sg", "Seaborgium", "269", 6, 7, C_TRANSISI,
    "Bh", "Bohrium", "270", 7, 7, C_TRANSISI,
    "Hs", "Hasium", "277", 8, 7, C_TRANSISI,
    "Mt", "Meitnerium", "278", 9, 7, C_UNKNOWN,
    "Ds", "Darmstadtium", "281", 10, 7, C_UNKNOWN,
    "Rg", "Roentgenium", "282", 11, 7, C_UNKNOWN,
    "Cn", "Kopernisium", "285", 12, 7, C_UNKNOWN,
    "Nh", "Nihonium", "286", 13, 7, C_UNKNOWN,
    "Fl", "Flerovium", "289", 14, 7, C_UNKNOWN,
    "Mc", "Moskovium", "290", 15, 7, C_UNKNOWN,
    "Lv", "Livermorium", "293", 16, 7, C_UNKNOWN,
    "Ts", "Tenesin", "294", 17, 7, C_UNKNOWN,
    "Og", "Oganeson", "294", 18, 7, C_UNKNOWN
];

let camera, scene, renderer;
let controls;

const objects = [];
const targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

    scene = new THREE.Scene();

    // 1. Buat Elemen DOM untuk tabel
    // PERUBAHAN: Loop sekarang i += 6 karena kita menambahkan 1 data warna di tiap unsur
    for (let i = 0; i < table.length; i += 6) {
        const element = document.createElement('div');
        element.className = 'element';
        // PERUBAHAN: Setel background color dari elemen ke-6 di array
        element.style.backgroundColor = table[i + 5];

        const number = document.createElement('div');
        number.className = 'number';
        // PERUBAHAN: Karena loncat 6, urutan menjadi i/6
        number.textContent = (i / 6) + 1;
        element.appendChild(number);

        const symbol = document.createElement('div');
        symbol.className = 'symbol';
        symbol.textContent = table[i];
        element.appendChild(symbol);

        const details = document.createElement('div');
        details.className = 'details';
        details.innerHTML = table[i + 1] + '<br>' + table[i + 2];
        element.appendChild(details);

        const objectCSS = new THREE.CSS3DObject(element);
        objectCSS.position.x = Math.random() * 4000 - 2000;
        objectCSS.position.y = Math.random() * 4000 - 2000;
        objectCSS.position.z = Math.random() * 4000 - 2000;
        scene.add(objectCSS);
        objects.push(objectCSS);

        // Target: TABLE
        const objectTable = new THREE.Object3D();
        objectTable.position.x = (table[i + 3] * 140) - 1330;
        objectTable.position.y = -(table[i + 4] * 180) + 990;
        targets.table.push(objectTable);
    }

    // 2. Kalkulasi Target: SPHERE (Bola)
    const vector = new THREE.Vector3();
    for (let i = 0, l = objects.length; i < l; i++) {
        const phi = Math.acos(-1 + (2 * i) / l);
        const theta = Math.sqrt(l * Math.PI) * phi;
        const objectSphere = new THREE.Object3D();
        objectSphere.position.setFromSphericalCoords(800, phi, theta);
        vector.copy(objectSphere.position).multiplyScalar(2);
        objectSphere.lookAt(vector);
        targets.sphere.push(objectSphere);
    }

    // 3. Kalkulasi Target: HELIX
    for (let i = 0, l = objects.length; i < l; i++) {
        const theta = i * 0.175 + Math.PI;
        const y = -(i * 8) + 450;
        const objectHelix = new THREE.Object3D();
        objectHelix.position.setFromCylindricalCoords(900, theta, y);
        vector.x = objectHelix.position.x * 2;
        vector.y = objectHelix.position.y;
        vector.z = objectHelix.position.z * 2;
        objectHelix.lookAt(vector);
        targets.helix.push(objectHelix);
    }

    // 4. Kalkulasi Target: GRID
    for (let i = 0; i < objects.length; i++) {
        const objectGrid = new THREE.Object3D();
        objectGrid.position.x = ((i % 5) * 400) - 800;
        objectGrid.position.y = (-(Math.floor(i / 5) % 5) * 400) + 800;
        objectGrid.position.z = (Math.floor(i / 25)) * 1000 - 2000;
        targets.grid.push(objectGrid);
    }

    // Konfigurasi Renderer CSS3D
    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    // Trackball Controls
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);

    // Bind Buttons
    const buttonTable = document.getElementById('table');
    buttonTable.addEventListener('click', function () {
        transform(targets.table, 2000);
    });

    const buttonSphere = document.getElementById('sphere');
    buttonSphere.addEventListener('click', function () {
        transform(targets.sphere, 2000);
    });

    const buttonHelix = document.getElementById('helix');
    buttonHelix.addEventListener('click', function () {
        transform(targets.helix, 2000);
    });

    const buttonGrid = document.getElementById('grid');
    buttonGrid.addEventListener('click', function () {
        transform(targets.grid, 2000);
    });

    transform(targets.table, 2000);
    window.addEventListener('resize', onWindowResize);
}

// Fungsi Transisi Animasi menggunakan TWEEN
function transform(targets, duration) {
    TWEEN.removeAll();
    for (let i = 0; i < objects.length; i++) {
        const object = objects[i];
        const target = targets[i];

        new TWEEN.Tween(object.position)
            .to({ x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();

        new TWEEN.Tween(object.rotation)
            .to({ x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration)
            .easing(TWEEN.Easing.Exponential.InOut)
            .start();
    }
    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}

function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
}

function render() {
    renderer.render(scene, camera);
}