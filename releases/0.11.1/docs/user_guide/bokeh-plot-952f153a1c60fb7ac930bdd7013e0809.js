
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
  };var element = document.getElementById("bb083480-9a24-4540-9f36-1fe4dbe49494");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid 'bb083480-9a24-4540-9f36-1fe4dbe49494' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"7da00277-bf9f-4c9d-9589-0dc664228749":{"roots":{"references":[{"attributes":{"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"}},"id":"0531ed5b-afe4-4497-bc99-d22f63f82bd2","type":"HelpTool"},{"attributes":{},"id":"f99ab574-7780-455e-9238-e01b16505a9c","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce6bb1f4-ed1f-455c-a8d0-a96b8f531d0e","type":"BasicTicker"}},"id":"e425bbcb-dd88-490c-a79a-315cf03906ef","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"fcdc54b6-dccd-4ff5-a898-67e0a2f1c2e7","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"}},"id":"92f8cfcf-194d-4b9c-b39e-60010729b642","type":"ResetTool"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"915db23d-ec0b-4ddd-a6c7-488e9fec4a90","type":"Line"},{"attributes":{"formatter":{"id":"f99ab574-7780-455e-9238-e01b16505a9c","type":"BasicTickFormatter"},"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"},"ticker":{"id":"65ac3446-d93b-460f-8e09-0ac21dcf00bf","type":"BasicTicker"}},"id":"63cc432b-7b20-4dcd-a131-74624a11c27c","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"b19778a3-19a4-487a-97be-8dfbcc14a474","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"cc0a922a-7077-4341-aaa6-5df71525ffbe","type":"DataRange1d"},{"attributes":{"below":[{"id":"63cc432b-7b20-4dcd-a131-74624a11c27c","type":"LinearAxis"}],"left":[{"id":"81d3075b-41db-46d3-a7b1-9ba1b7ba4aeb","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"63cc432b-7b20-4dcd-a131-74624a11c27c","type":"LinearAxis"},{"id":"e2f2187e-bc73-4d97-94b1-39f468500c9c","type":"Grid"},{"id":"81d3075b-41db-46d3-a7b1-9ba1b7ba4aeb","type":"LinearAxis"},{"id":"e425bbcb-dd88-490c-a79a-315cf03906ef","type":"Grid"},{"id":"fcdc54b6-dccd-4ff5-a898-67e0a2f1c2e7","type":"BoxAnnotation"},{"id":"78784aa2-6f77-4ee4-adbd-e03bb95f997e","type":"GlyphRenderer"},{"id":"2ef2bd12-14c8-438d-bbb9-6275d87036bd","type":"GlyphRenderer"}],"tool_events":{"id":"d94516ca-e047-424b-b6da-01132b9be46a","type":"ToolEvents"},"tools":[{"id":"0e8081ba-e58f-4427-b77a-f850e333471b","type":"PanTool"},{"id":"12cd1549-32c1-481f-a747-0c664ac43db8","type":"WheelZoomTool"},{"id":"2437f138-5adf-40e4-8bba-7d5d8c93d96d","type":"BoxZoomTool"},{"id":"49e21c47-b471-4d23-a502-4736dc679457","type":"PreviewSaveTool"},{"id":"07ecf465-8a97-4469-be22-691a6aa1553d","type":"ResizeTool"},{"id":"92f8cfcf-194d-4b9c-b39e-60010729b642","type":"ResetTool"},{"id":"0531ed5b-afe4-4497-bc99-d22f63f82bd2","type":"HelpTool"}],"x_range":{"id":"cc0a922a-7077-4341-aaa6-5df71525ffbe","type":"DataRange1d"},"y_range":{"id":"9550b611-c0a5-4e46-b0c2-02b758648864","type":"DataRange1d"}},"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"},"ticker":{"id":"65ac3446-d93b-460f-8e09-0ac21dcf00bf","type":"BasicTicker"}},"id":"e2f2187e-bc73-4d97-94b1-39f468500c9c","type":"Grid"},{"attributes":{"data_source":{"id":"b19778a3-19a4-487a-97be-8dfbcc14a474","type":"ColumnDataSource"},"glyph":{"id":"72bb8f03-92a7-4ffb-8905-6407cb019d14","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"ebb76e4a-cf67-44b2-b8bf-6666bc2c6658","type":"Circle"},"selection_glyph":null},"id":"2ef2bd12-14c8-438d-bbb9-6275d87036bd","type":"GlyphRenderer"},{"attributes":{},"id":"d94516ca-e047-424b-b6da-01132b9be46a","type":"ToolEvents"},{"attributes":{},"id":"763004bf-507a-4556-8583-cc0dfa2ecc44","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"}},"id":"49e21c47-b471-4d23-a502-4736dc679457","type":"PreviewSaveTool"},{"attributes":{},"id":"ce6bb1f4-ed1f-455c-a8d0-a96b8f531d0e","type":"BasicTicker"},{"attributes":{"data_source":{"id":"cdbeb3df-8975-4d07-ac96-55adf8b3a0df","type":"ColumnDataSource"},"glyph":{"id":"915db23d-ec0b-4ddd-a6c7-488e9fec4a90","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"0805bf8c-d7ab-4e49-91b3-d9a3a0675423","type":"Line"},"selection_glyph":null},"id":"78784aa2-6f77-4ee4-adbd-e03bb95f997e","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"}},"id":"0e8081ba-e58f-4427-b77a-f850e333471b","type":"PanTool"},{"attributes":{"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"}},"id":"12cd1549-32c1-481f-a747-0c664ac43db8","type":"WheelZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,8,7,3]}},"id":"cdbeb3df-8975-4d07-ac96-55adf8b3a0df","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"9550b611-c0a5-4e46-b0c2-02b758648864","type":"DataRange1d"},{"attributes":{},"id":"65ac3446-d93b-460f-8e09-0ac21dcf00bf","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"72bb8f03-92a7-4ffb-8905-6407cb019d14","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":8},"x":{"field":"x"},"y":{"field":"y"}},"id":"ebb76e4a-cf67-44b2-b8bf-6666bc2c6658","type":"Circle"},{"attributes":{"overlay":{"id":"fcdc54b6-dccd-4ff5-a898-67e0a2f1c2e7","type":"BoxAnnotation"},"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"}},"id":"2437f138-5adf-40e4-8bba-7d5d8c93d96d","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"}},"id":"07ecf465-8a97-4469-be22-691a6aa1553d","type":"ResizeTool"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"0805bf8c-d7ab-4e49-91b3-d9a3a0675423","type":"Line"},{"attributes":{"formatter":{"id":"763004bf-507a-4556-8583-cc0dfa2ecc44","type":"BasicTickFormatter"},"plot":{"id":"b15733e1-ee85-43af-88df-2548a93f0bda","subtype":"Figure","type":"Plot"},"ticker":{"id":"ce6bb1f4-ed1f-455c-a8d0-a96b8f531d0e","type":"BasicTicker"}},"id":"81d3075b-41db-46d3-a7b1-9ba1b7ba4aeb","type":"LinearAxis"}],"root_ids":["b15733e1-ee85-43af-88df-2548a93f0bda"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"7da00277-bf9f-4c9d-9589-0dc664228749","elementid":"bb083480-9a24-4540-9f36-1fe4dbe49494","modelid":"b15733e1-ee85-43af-88df-2548a93f0bda"}];
          
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