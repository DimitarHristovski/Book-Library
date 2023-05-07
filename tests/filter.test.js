const filterDonate = require("../js/filter");
const filterLegend = require("../js/filter");
const { JSDOM } = require("jsdom");
const filterDonate = require("./filterDonate");
const filterLegend = require("./filterLegend");

describe("filterDonate function", () => {
  beforeEach(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <div class="main mainD"></div>
          <div class="main mainL"></div>
        </body>
      </html>
    `);
    global.document = dom.window.document;
  });

  test("should show donate divs and hide legend divs", () => {
    filterDonate();

    const allDivs = document.querySelectorAll(".main");
    allDivs.forEach((div) => {
      expect(div.style.display).toBe("none");
    });

    const donateDivs = document.querySelectorAll(".mainD");
    donateDivs.forEach((div) => {
      expect(div.style.display).toBe("inline-block");
      expect(div.style.backgroundColor).toBe("#f4f4f5");
      expect(div.style.width).toBe("70%");
      expect(div.style.height).toBe("90vh");
    });

    const legendDivs = document.querySelectorAll(".mainL");
    legendDivs.forEach((div) => {
      expect(div.style.display).toBe("none");
    });
  });
});

describe("filterLegend function", () => {
  beforeEach(() => {
    const dom = new JSDOM(`
      <html>
        <body>
          <div class="main mainD"></div>
          <div class="main mainL"></div>
        </body>
      </html>
    `);
    global.document = dom.window.document;
  });

  test("should show legend divs and hide donate divs", () => {
    filterLegend();

    const allDivs = document.querySelectorAll(".main");
    allDivs.forEach((div) => {
      expect(div.style.display).toBe("none");
    });

    const legendDivs = document.querySelectorAll(".mainL");
    legendDivs.forEach((div) => {
      expect(div.style.display).toBe("inline-block");
      expect(div.style.backgroundColor).toBe("#cbd5e1");
      expect(div.style.width).toBe("70%");
      expect(div.style.height).toBe("90vh");
    });

    const donateDivs = document.querySelectorAll(".mainD");
    donateDivs.forEach((div) => {
      expect(div.style.display).toBe("none");
    });
  });
});
