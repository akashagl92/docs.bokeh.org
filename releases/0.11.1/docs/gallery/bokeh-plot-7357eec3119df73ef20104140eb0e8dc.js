
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
  };var element = document.getElementById("c1b41ab4-10fc-417e-8781-3c952a74ed98");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'c1b41ab4-10fc-417e-8781-3c952a74ed98' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"eb63332c-9516-4593-8e53-c24418b73b9a":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#3B8686"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"aa9a4e87-deeb-4fdc-8732-d8b7caa75f81","type":"Rect"},{"attributes":{"data_source":{"id":"6fd708b0-da80-44b2-b1d9-33025b16dea4","type":"ColumnDataSource"},"glyph":{"id":"32a9352c-6fe9-4f07-8cdf-f4978187cb10","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"de88c40a-c72d-401b-9167-febd6abbfc0f","type":"Segment"},"selection_glyph":null},"id":"048cacdb-1aee-4928-9338-4fc822219269","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"018a7f34-7b00-4294-8a3a-02385046d40f","type":"ColumnDataSource"},"glyph":{"id":"6db128b4-0641-48dc-8e5d-268cfc0fa412","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"302101f0-69c7-4645-bbb5-21b4dcb3efff","type":"Rect"},"selection_glyph":null},"id":"0edcd1e5-d9f1-4d1d-9c6c-8219fa142f0a","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"eea2e7ff-760c-4673-8e7f-b84596f62120","type":"Rect"},{"attributes":{},"id":"674d5d97-c046-4fd7-83a5-d32d763cdd9b","type":"ToolEvents"},{"attributes":{},"id":"77b80bc5-6e74-4f07-a510-10724bb55d8a","type":"CategoricalTickFormatter"},{"attributes":{"data_source":{"id":"5430aace-905b-4275-b265-6200716bb490","type":"ColumnDataSource"},"glyph":{"id":"3889edfe-f068-436c-8fa8-6034e9b69d4a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"eea2e7ff-760c-4673-8e7f-b84596f62120","type":"Rect"},"selection_glyph":null},"id":"9e7b8758-6cc0-46d8-98d2-e2ec1e976129","type":"GlyphRenderer"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"86f255d7-3f9c-4406-9038-29f0eafec0d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ba5d9aa-2f81-4872-838f-ac5acc41ef9c","type":"CategoricalTicker"}},"id":"be55dbe8-2b9d-49cc-ac43-e00a74bd0001","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"7082ba20-a753-431b-ab22-e7dbbc524978","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"81d06088-7dee-4636-99fe-a4926c6ae36f","type":"Rect"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"de88c40a-c72d-401b-9167-febd6abbfc0f","type":"Segment"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[-2.5734648217345715,-2.7505201837363056,-1.3465541886838976,-1.6530664686286598,-0.5844292293898272,-0.35618784728732633],"y1":[-0.6701293586879956,-0.6849403788958814,0.44199379901530966,0.2031457038266561,1.3435784779568265,1.3976925501561301]}},"id":"dc584e52-ec90-44f7-9b80-f72737a82515","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"590b8e82-5877-44d8-af36-cc66f2590407","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"5b493181-0592-4404-9a7a-a4c64643c7e3","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","a","a","a","a","a","a","b","c","d","d","d","d","d","e","e","e","e","e","e","e"],"y":[-2.9357381904725393,2.7694783617604175,-2.581592945859262,-2.731680477380991,-2.7754952170352882,-3.2607725758921338,2.5025516900897857,3.0537622992032913,3.564472409608087,4.025991044800865,3.7267930677552936,4.40579348658608,3.7063252932654485,3.8524307560554973,4.726534078420629,-0.6418196852317237,-0.7937378716946784,4.720554654537628,-0.9575562771214239,4.631455720047304,-0.6104766996859659]}},"id":"1c153a92-4bd4-44e2-9ea9-21ea72307ae2","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#E08E79"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"34d85384-4837-469a-ab0f-68a9b2d87aa9","type":"Rect"},{"attributes":{"formatter":{"id":"77b80bc5-6e74-4f07-a510-10724bb55d8a","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"86f255d7-3f9c-4406-9038-29f0eafec0d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"6ba5d9aa-2f81-4872-838f-ac5acc41ef9c","type":"CategoricalTicker"}},"id":"451229f3-fedd-496f-aa8b-098ea4a1bf85","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"49912084-c6e6-42ef-858b-38fc88ea999d","type":"ColumnDataSource"},"glyph":{"id":"34d85384-4837-469a-ab0f-68a9b2d87aa9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"5b493181-0592-4404-9a7a-a4c64643c7e3","type":"Rect"},"selection_glyph":null},"id":"cada7925-9db2-496d-b55d-71d5d1933e05","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[-2.5734648217345715,-2.7505201837363056,-1.3465541886838976,-1.6530664686286598,-0.5844292293898272,-0.35618784728732633]}},"id":"018a7f34-7b00-4294-8a3a-02385046d40f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[2.5020964130562975,2.8835524238376413,3.450313091901654,3.6577313588410356,4.556924656867916,4.370418338955518],"y1":[0.5987609500097216,0.7424567421975276,1.6453215161698473,1.584979965832408,2.6289169495212623,2.7095985439647348]}},"id":"6fd708b0-da80-44b2-b1d9-33025b16dea4","type":"ColumnDataSource"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"6c369694-45eb-4bb9-a284-066156b79633","type":"FactorRange"},{"attributes":{"formatter":{"id":"4a10522b-ab75-4834-895b-3c569b059c46","type":"BasicTickFormatter"},"plot":{"id":"86f255d7-3f9c-4406-9038-29f0eafec0d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"e500c2ad-257c-4d2b-81c9-1d675f197a0b","type":"BasicTicker"}},"id":"d2100886-0f36-4d0a-851c-0150d1e036d8","type":"LinearAxis"},{"attributes":{"data_source":{"id":"00fa9717-cad8-4064-b8ab-6e1e31be6afd","type":"ColumnDataSource"},"glyph":{"id":"aa9a4e87-deeb-4fdc-8732-d8b7caa75f81","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"81d06088-7dee-4636-99fe-a4926c6ae36f","type":"Rect"},"selection_glyph":null},"id":"625213f8-a5fe-4aca-b12b-330b256e8e52","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","height","x"],"data":{"height":[0.6003226419698938,0.7306577042665979,0.6000586701293131,0.6746584027445901,0.7188725342055118,0.7349784628348481],"x":["a","b","c","d","e","f"],"y":[0.2985996290247747,0.3771278900642286,1.3452921811051908,1.247650764460113,2.2694806824185063,2.3421093125473105]}},"id":"49912084-c6e6-42ef-858b-38fc88ea999d","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"1c153a92-4bd4-44e2-9ea9-21ea72307ae2","type":"ColumnDataSource"},"glyph":{"id":"7082ba20-a753-431b-ab22-e7dbbc524978","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"8afb616b-40b9-443f-a24c-4d006bfb4f6d","type":"Circle"},"selection_glyph":null},"id":"423d27bd-d59d-47ff-a61a-0d56f47bb9ae","type":"GlyphRenderer"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"86f255d7-3f9c-4406-9038-29f0eafec0d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"e500c2ad-257c-4d2b-81c9-1d675f197a0b","type":"BasicTicker"}},"id":"e9c4cf68-a0e0-4f01-ae62-bfa095bc8238","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6db128b4-0641-48dc-8e5d-268cfc0fa412","type":"Rect"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"451229f3-fedd-496f-aa8b-098ea4a1bf85","type":"CategoricalAxis"}],"left":[{"id":"d2100886-0f36-4d0a-851c-0150d1e036d8","type":"LinearAxis"}],"renderers":[{"id":"451229f3-fedd-496f-aa8b-098ea4a1bf85","type":"CategoricalAxis"},{"id":"be55dbe8-2b9d-49cc-ac43-e00a74bd0001","type":"Grid"},{"id":"d2100886-0f36-4d0a-851c-0150d1e036d8","type":"LinearAxis"},{"id":"e9c4cf68-a0e0-4f01-ae62-bfa095bc8238","type":"Grid"},{"id":"048cacdb-1aee-4928-9338-4fc822219269","type":"GlyphRenderer"},{"id":"0aadccef-6ceb-4815-8dd2-2e392e5dd1ca","type":"GlyphRenderer"},{"id":"cada7925-9db2-496d-b55d-71d5d1933e05","type":"GlyphRenderer"},{"id":"625213f8-a5fe-4aca-b12b-330b256e8e52","type":"GlyphRenderer"},{"id":"0edcd1e5-d9f1-4d1d-9c6c-8219fa142f0a","type":"GlyphRenderer"},{"id":"9e7b8758-6cc0-46d8-98d2-e2ec1e976129","type":"GlyphRenderer"},{"id":"423d27bd-d59d-47ff-a61a-0d56f47bb9ae","type":"GlyphRenderer"}],"tool_events":{"id":"674d5d97-c046-4fd7-83a5-d32d763cdd9b","type":"ToolEvents"},"tools":[{"id":"3e3b3ea9-2910-4f51-b80a-681d87930c0d","type":"PreviewSaveTool"}],"x_range":{"id":"6c369694-45eb-4bb9-a284-066156b79633","type":"FactorRange"},"y_range":{"id":"a75b1b73-ce1c-4155-9977-a1ee79f5ca6f","type":"DataRange1d"}},"id":"86f255d7-3f9c-4406-9038-29f0eafec0d0","subtype":"Figure","type":"Plot"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"85896b2b-d534-4951-abc0-8e9b5e6ca9a3","type":"Segment"},{"attributes":{},"id":"e500c2ad-257c-4d2b-81c9-1d675f197a0b","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"302101f0-69c7-4645-bbb5-21b4dcb3efff","type":"Rect"},{"attributes":{"data_source":{"id":"dc584e52-ec90-44f7-9b80-f72737a82515","type":"ColumnDataSource"},"glyph":{"id":"85896b2b-d534-4951-abc0-8e9b5e6ca9a3","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"590b8e82-5877-44d8-af36-cc66f2590407","type":"Segment"},"selection_glyph":null},"id":"0aadccef-6ceb-4815-8dd2-2e392e5dd1ca","type":"GlyphRenderer"},{"attributes":{},"id":"6ba5d9aa-2f81-4872-838f-ac5acc41ef9c","type":"CategoricalTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3889edfe-f068-436c-8fa8-6034e9b69d4a","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","height","x"],"data":{"height":[0.6685676667278234,0.6967394168268111,0.6032690470252245,0.7071758592611618,0.566465937358924,0.5769275309737565],"x":["a","b","c","d","e","f"],"y":[-0.3358455253240839,-0.3365706704824759,0.7436283225279219,0.556733633457237,1.6268114466362884,1.6861563156430084]}},"id":"00fa9717-cad8-4064-b8ab-6e1e31be6afd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"86f255d7-3f9c-4406-9038-29f0eafec0d0","subtype":"Figure","type":"Plot"}},"id":"3e3b3ea9-2910-4f51-b80a-681d87930c0d","type":"PreviewSaveTool"},{"attributes":{"callback":null},"id":"a75b1b73-ce1c-4155-9977-a1ee79f5ca6f","type":"DataRange1d"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"32a9352c-6fe9-4f07-8cdf-f4978187cb10","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"8afb616b-40b9-443f-a24c-4d006bfb4f6d","type":"Circle"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[2.5020964130562975,2.8835524238376413,3.450313091901654,3.6577313588410356,4.556924656867916,4.370418338955518]}},"id":"5430aace-905b-4275-b265-6200716bb490","type":"ColumnDataSource"},{"attributes":{},"id":"4a10522b-ab75-4834-895b-3c569b059c46","type":"BasicTickFormatter"}],"root_ids":["86f255d7-3f9c-4406-9038-29f0eafec0d0"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"eb63332c-9516-4593-8e53-c24418b73b9a","elementid":"c1b41ab4-10fc-417e-8781-3c952a74ed98","modelid":"86f255d7-3f9c-4406-9038-29f0eafec0d0"}];
          
          Bokeh.embed.embed_items(docs_json, render_items);
      });
    },
    function(Bokeh) {
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.css");
      console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
      Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.css");
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