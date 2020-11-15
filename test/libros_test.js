var expect = require("chai").expect;
const Libro = require('../src/libros/libro.js');
const LibroController = require('../src/libros/libroController.js');

describe("Test sobre adición de libros: ", function() {
	it("Crear un libro, añadirlo correctamente y devolverlo por el id", function() {
		lc = new LibroController();
		libro = new Libro(1, "Los Juegos del Hambre", "Suzanne Collins", 2008, 1, 9780439023481, 374, "Scholastic Corporation", "CIENCIAFICCION");
		lc.addLibro(libro);
		libro_from_lc = lc.getLibro(1);
		expect(libro_from_lc.to_string()).to.equal(libro.to_string());
	})
});