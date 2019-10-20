
(function(global) {
  function now() {
    return new Date();
  }

  if (typeof (window._bokeh_onload_callbacks) === "undefined") {
    window._bokeh_onload_callbacks = [];
  }

  function run_callbacks() {
    window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
    delete window._bokeh_onload_callbacks
    console.info("Bokeh: all callbacks have finished");
  }

  function load_libs(js_urls, callback) {
    window._bokeh_onload_callbacks.push(callback);
    if (window._bokeh_is_loading > 0) {
      console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
      return null;
    }
    if (js_urls == null || js_urls.length === 0) {
      run_callbacks();
      return null;
    }
    console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
    window._bokeh_is_loading = js_urls.length;
    for (var i = 0; i < js_urls.length; i++) {
      var url = js_urls[i];
      var s = document.createElement('script');
      s.src = url;
      s.async = false;
      s.onreadystatechange = s.onload = function() {
        window._bokeh_is_loading--;
        if (window._bokeh_is_loading === 0) {
          console.log("Bokeh: all BokehJS libraries loaded");
          run_callbacks()
        }
      };
      s.onerror = function() {
        console.warn("failed to load library " + url);
      };
      console.log("Bokeh: injecting script tag for BokehJS library: ", url);
      document.getElementsByTagName("head")[0].appendChild(s);
    }
  };var element = document.getElementById("5257b2c4-a42b-4dcc-b407-d22ca55f52c2");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5257b2c4-a42b-4dcc-b407-d22ca55f52c2' but no matching script tag was found. ")
    return false;
  }var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.0.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"89e6cbe7-b1a7-4b68-af45-655e6718c0a3": {"version": "0.11.0-11-g97955ab", "roots": {"references": [{"type": "ColumnDataSource", "id": "399fd14f-2609-4dda-b9be-b1dd623ecce0", "attributes": {"data": {"x": [1.00794, 6.941, 9.012182, 10.811, 12.0107, 14.0067, 15.9994, 18.9984032, 20.1797, 22.98976928, 24.305, 26.9815386, 28.0855, 30.973762, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.955912, 47.867, 50.9415, 51.9961, 54.938045, 55.845, 58.933195, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.4678, 87.62, 88.90585, 91.224, 92.90638, 95.96, 98.0, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.71, 121.76, 127.6, 126.90447, 131.293, 132.9054519, 137.327, 138.90547, 140.116, 140.90765, 144.242, 145.0, 150.36, 151.964, 157.25, 158.92535, 162.5, 164.93032, 167.259, 168.93421, 173.054, 174.9668, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 195.084, 196.966569, 200.59, 204.3833, 207.2], "y": [8.99e-05, 0.54, 1.85, 2.46, 2.26, 0.0, 0.0, 0.0, 0.0, 0.97, 1.74, 2.7, 2.33, 1.82, 1.96, 0.0, 0.0, 0.86, 1.55, 2.99, 4.51, 6.11, 7.14, 7.47, 7.87, 8.9, 8.91, 8.92, 7.14, 5.9, 5.32, 5.73, 4.82, 3.12, 0.0, 1.53, 2.63, 4.47, 6.51, 8.57, 10.28, 11.5, 12.37, 12.45, 12.02, 10.49, 8.65, 7.31, 7.31, 6.7, 6.24, 4.94, 0.01, 1.88, 3.51, 6.15, 6.69, 6.64, 7.01, 7.26, 7.35, 5.24, 7.9, 8.22, 8.55, 8.8, 9.07, 9.32, 6.57, 9.84, 13.31, 16.65, 19.25, 21.02, 22.59, 22.56, 21.09, 19.3, 13.53, 11.85, 11.34], "fill_color": ["#053061", "#2166ac", "#d1e5f0", "#fddbc7", "#67001f", "#053061", "#053061", "#053061", "#053061", "#053061", "#4393c3", "#4393c3", "#d1e5f0", "#053061", "#053061", "#053061", "#053061", "#053061", "#4393c3", "#d1e5f0", "#f7f7f7", "#f7f7f7", "#f7f7f7", "#92c5de", "#d1e5f0", "#d1e5f0", "#d1e5f0", "#92c5de", "#2166ac", "#053061", "#92c5de", "#4393c3", "#2166ac", "#053061", "#053061", "#053061", "#4393c3", "#d1e5f0", "#f7f7f7", "#f4a582", "#f4a582", "#fddbc7", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#2166ac", "#2166ac", "#2166ac", "#4393c3", "#2166ac", "#053061", "#053061", "#053061", "#4393c3", "#92c5de", "#4393c3", "#92c5de", "#92c5de", "#92c5de", "#92c5de", "#4393c3", "#d1e5f0", "#d1e5f0", "#d1e5f0", "#d1e5f0", "#d1e5f0", "#d1e5f0", "#4393c3", "#f7f7f7", "#fddbc7", "#d6604d", "#b2182b", "#b2182b", "#d6604d", "#f4a582", "#f7f7f7", "#92c5de", "#053061", "#2166ac", "#2166ac"]}, "column_names": ["y", "x", "fill_color"], "callback": null}}, {"type": "BoxAnnotation", "id": "45211f70-dd2d-4516-8b78-80bf0629ded8", "attributes": {"line_color": {"value": "black"}, "line_width": {"value": 2}, "right_units": "screen", "top_units": "screen", "plot": null, "level": "overlay", "line_alpha": {"value": 1.0}, "fill_alpha": {"value": 0.5}, "line_dash": [4, 4], "left_units": "screen", "bottom_units": "screen", "render_mode": "css", "fill_color": {"value": "lightgrey"}}}, {"type": "BasicTicker", "id": "4bb0a054-27f5-45bc-b3e5-a3a7936dd871", "attributes": {}}, {"type": "BoxZoomTool", "id": "aecfcd56-38b2-4c4c-98b4-1fe3644ced3c", "attributes": {"overlay": {"type": "BoxAnnotation", "id": "45211f70-dd2d-4516-8b78-80bf0629ded8"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "BasicTickFormatter", "id": "a3b40be3-1a8d-40fe-b113-c2d540d3c2b3", "attributes": {}}, {"type": "WheelZoomTool", "id": "e88515be-9552-44ac-8527-4031d5973dec", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "BasicTickFormatter", "id": "daf34280-04dc-4265-9b16-9cf886765988", "attributes": {}}, {"type": "DataRange1d", "id": "52557f64-0a16-401a-9d48-6e6d5aacaefa", "attributes": {"callback": null}}, {"type": "DataRange1d", "id": "5aaf30ee-f9b7-47ec-8164-bb7426c659f1", "attributes": {"callback": null}}, {"type": "Circle", "id": "6796f33b-dd33-4c9f-be88-a278458dbe0c", "attributes": {"line_color": {"value": "#1f77b4"}, "y": {"field": "y"}, "x": {"field": "x"}, "size": {"value": 12, "units": "screen"}, "line_alpha": {"value": 0.1}, "fill_color": {"value": "#1f77b4"}, "fill_alpha": {"value": 0.1}}}, {"type": "ColumnDataSource", "id": "50cff550-d123-432d-820d-52cc0e9109ba", "attributes": {"data": {"x": [1.00794, 6.941, 9.012182, 10.811, 12.0107, 14.0067, 15.9994, 18.9984032, 20.1797, 22.98976928, 24.305, 26.9815386, 28.0855, 30.973762, 32.065, 35.453, 39.948, 39.0983, 40.078, 44.955912, 47.867, 50.9415, 51.9961, 54.938045, 55.845, 58.933195, 58.6934, 63.546, 65.38, 69.723, 72.64, 74.9216, 78.96, 79.904, 83.798, 85.4678, 87.62, 88.90585, 91.224, 92.90638, 95.96, 98.0, 101.07, 102.9055, 106.42, 107.8682, 112.411, 114.818, 118.71, 121.76, 127.6, 126.90447, 131.293, 132.9054519, 137.327, 138.90547, 140.116, 140.90765, 144.242, 145.0, 150.36, 151.964, 157.25, 158.92535, 162.5, 164.93032, 167.259, 168.93421, 173.054, 174.9668, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 195.084, 196.966569, 200.59, 204.3833, 207.2], "text": ["H", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb"], "y": [0.30008989999999997, 0.8400000000000001, 2.15, 2.76, 2.5599999999999996, 0.3, 0.3, 0.3, 0.3, 1.27, 2.04, 3.0, 2.63, 2.12, 2.26, 0.3, 0.3, 1.16, 1.85, 3.29, 4.81, 6.41, 7.4399999999999995, 7.77, 8.17, 9.200000000000001, 9.21, 9.22, 7.4399999999999995, 6.2, 5.62, 6.03, 5.12, 3.42, 0.3, 1.83, 2.9299999999999997, 4.77, 6.81, 8.870000000000001, 10.58, 11.8, 12.67, 12.75, 12.32, 10.790000000000001, 8.950000000000001, 7.609999999999999, 7.609999999999999, 7.0, 6.54, 5.24, 0.31, 2.1799999999999997, 3.8099999999999996, 6.45, 6.99, 6.9399999999999995, 7.31, 7.56, 7.6499999999999995, 5.54, 8.200000000000001, 8.520000000000001, 8.850000000000001, 9.100000000000001, 9.370000000000001, 9.620000000000001, 6.87, 10.14, 13.610000000000001, 16.95, 19.55, 21.32, 22.89, 22.86, 21.39, 19.6, 13.83, 12.15, 11.64]}, "column_names": ["text", "x", "y"], "callback": null}}, {"type": "ResetTool", "id": "3b348202-79a6-430b-8cb5-0a3d289b2d66", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "ResizeTool", "id": "37038791-ea53-4235-a3d9-391f7d64d161", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "BasicTicker", "id": "fd0289de-9288-4002-a5eb-e09aab66e333", "attributes": {}}, {"type": "PanTool", "id": "fa1991c6-d1e8-4a90-8a03-941a616336f9", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "LinearAxis", "id": "c39ac106-7042-48e5-b8a0-7ce3c1741e13", "attributes": {"ticker": {"type": "BasicTicker", "id": "fd0289de-9288-4002-a5eb-e09aab66e333"}, "formatter": {"type": "BasicTickFormatter", "id": "daf34280-04dc-4265-9b16-9cf886765988"}, "axis_label": "atomic weight (amu)", "plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "LinearAxis", "id": "d914615f-a3a1-435d-91f5-b6b50dea3735", "attributes": {"ticker": {"type": "BasicTicker", "id": "4bb0a054-27f5-45bc-b3e5-a3a7936dd871"}, "formatter": {"type": "BasicTickFormatter", "id": "a3b40be3-1a8d-40fe-b113-c2d540d3c2b3"}, "axis_label": "density (g/cm^3)", "plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "Text", "id": "57af4ee0-1361-4359-867b-65215fe30bc1", "attributes": {"text_font_size": {"value": "10pt"}, "x": {"field": "x"}, "text_color": {"value": "#333333"}, "text_align": "center", "y": {"field": "y"}}}, {"type": "ToolEvents", "id": "b7c1476f-20ef-447d-a532-10cfcaae2290", "attributes": {}}, {"type": "Plot", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112", "attributes": {"y_range": {"type": "DataRange1d", "id": "5aaf30ee-f9b7-47ec-8164-bb7426c659f1"}, "renderers": [{"type": "LinearAxis", "id": "c39ac106-7042-48e5-b8a0-7ce3c1741e13"}, {"type": "Grid", "id": "9036ed7d-f048-4faf-a48c-1eea2bdd2b15"}, {"type": "LinearAxis", "id": "d914615f-a3a1-435d-91f5-b6b50dea3735"}, {"type": "Grid", "id": "f98a5598-d96d-4fb3-b298-0db675c06b85"}, {"type": "BoxAnnotation", "id": "45211f70-dd2d-4516-8b78-80bf0629ded8"}, {"type": "GlyphRenderer", "id": "631e7189-3467-4b0a-a42e-ffa7f1a2f685"}, {"type": "GlyphRenderer", "id": "cbe1329c-8fc5-4b28-b9ee-76e8ff24f403"}], "tools": [{"type": "PanTool", "id": "fa1991c6-d1e8-4a90-8a03-941a616336f9"}, {"type": "WheelZoomTool", "id": "e88515be-9552-44ac-8527-4031d5973dec"}, {"type": "BoxZoomTool", "id": "aecfcd56-38b2-4c4c-98b4-1fe3644ced3c"}, {"type": "ResetTool", "id": "3b348202-79a6-430b-8cb5-0a3d289b2d66"}, {"type": "ResizeTool", "id": "37038791-ea53-4235-a3d9-391f7d64d161"}, {"type": "PreviewSaveTool", "id": "f5e0f7e9-ecf9-4301-b510-7eef86c4fb14"}], "title": "Density vs Atomic Weight of Elements (colored by melting point)", "plot_width": 1200, "left": [{"type": "LinearAxis", "id": "d914615f-a3a1-435d-91f5-b6b50dea3735"}], "x_range": {"type": "DataRange1d", "id": "52557f64-0a16-401a-9d48-6e6d5aacaefa"}, "background_fill_color": {"value": "#cccccc"}, "logo": "grey", "tool_events": {"type": "ToolEvents", "id": "b7c1476f-20ef-447d-a532-10cfcaae2290"}, "below": [{"type": "LinearAxis", "id": "c39ac106-7042-48e5-b8a0-7ce3c1741e13"}], "toolbar_location": "left"}, "subtype": "Figure"}, {"type": "PreviewSaveTool", "id": "f5e0f7e9-ecf9-4301-b510-7eef86c4fb14", "attributes": {"plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "Text", "id": "baee7f41-65cb-4a76-96cd-dfb4ff944549", "attributes": {"text_alpha": {"value": 0.1}, "text_font_size": {"value": "10pt"}, "text_align": "center", "x": {"field": "x"}, "y": {"field": "y"}, "text_color": {"value": "black"}}}, {"type": "GlyphRenderer", "id": "cbe1329c-8fc5-4b28-b9ee-76e8ff24f403", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "50cff550-d123-432d-820d-52cc0e9109ba"}, "nonselection_glyph": {"type": "Text", "id": "baee7f41-65cb-4a76-96cd-dfb4ff944549"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Text", "id": "57af4ee0-1361-4359-867b-65215fe30bc1"}}}, {"type": "GlyphRenderer", "id": "631e7189-3467-4b0a-a42e-ffa7f1a2f685", "attributes": {"data_source": {"type": "ColumnDataSource", "id": "399fd14f-2609-4dda-b9be-b1dd623ecce0"}, "nonselection_glyph": {"type": "Circle", "id": "6796f33b-dd33-4c9f-be88-a278458dbe0c"}, "selection_glyph": null, "hover_glyph": null, "glyph": {"type": "Circle", "id": "6ae868f8-a32e-4405-9f4c-956f1334674f"}}}, {"type": "Grid", "id": "9036ed7d-f048-4faf-a48c-1eea2bdd2b15", "attributes": {"ticker": {"type": "BasicTicker", "id": "fd0289de-9288-4002-a5eb-e09aab66e333"}, "grid_line_color": {"value": "white"}, "plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "Grid", "id": "f98a5598-d96d-4fb3-b298-0db675c06b85", "attributes": {"ticker": {"type": "BasicTicker", "id": "4bb0a054-27f5-45bc-b3e5-a3a7936dd871"}, "grid_line_color": {"value": "white"}, "dimension": 1, "plot": {"type": "Plot", "subtype": "Figure", "id": "b8bd1211-1c7d-4a3e-afd0-1bc264258112"}}}, {"type": "Circle", "id": "6ae868f8-a32e-4405-9f4c-956f1334674f", "attributes": {"x": {"field": "x"}, "size": {"value": 12, "units": "screen"}, "y": {"field": "y"}, "fill_color": {"field": "fill_color"}, "fill_alpha": {"value": 0.8}}}], "root_ids": ["b8bd1211-1c7d-4a3e-afd0-1bc264258112"]}, "title": "Bokeh Application"}};
          var render_items = [{"docid": "89e6cbe7-b1a7-4b68-af45-655e6718c0a3", "modelid": "b8bd1211-1c7d-4a3e-afd0-1bc264258112", "elementid": "5257b2c4-a42b-4dcc-b407-d22ca55f52c2"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.0.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.0.min.css");
    }
  ];

  function run_inline_js() {
    for (var i = 0; i < inline_js.length; i++) {
      inline_js[i](window.Bokeh);
    }
  }

  if (window._bokeh_is_loading === 0) {
    console.log("Bokeh: BokehJS loaded, going straight to plotting");
    run_inline_js();
  } else {
    load_libs(js_urls, function() {
      console.log("Bokeh: BokehJS plotting callback run at", now());
      run_inline_js();
    });
  }
}(this));