
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
  };var element = document.getElementById("5e266312-f637-436e-916c-b40dc59fe7a9");
  if (element == null) {
    console.log("Bokeh: ERROR: autoload.js configured with elementid '5e266312-f637-436e-916c-b40dc59fe7a9' but no matching script tag was found. ")
    return false;
  }

  var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.11.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.11.1.min.js'];

  var inline_js = [
    function(Bokeh) {
      Bokeh.set_log_level("info");
    },
    
    function(Bokeh) {
      Bokeh.$(function() {
          var docs_json = {"ee2b7c27-f660-43e3-94bf-4788e62b0932":{"roots":{"references":[{"attributes":{"plot":{"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"},"ticker":{"id":"05eb8459-9c85-4653-ab95-123e08526350","type":"BasicTicker"}},"id":"80b93d34-dac3-4280-bfa1-79c0293205e1","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"50ff3890-e0ac-4ab0-aa80-b8cd8c3946cf","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"6902695c-f94c-4a9d-b634-263cde17007b","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"}},"id":"1df6fdcc-98ad-41db-851f-e7b54e9f24de","type":"ResizeTool"},{"attributes":{"plot":{"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"}},"id":"d0660c1d-600d-4c1e-a31b-28e0ac096cc1","type":"CrosshairTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"25610b15-0fc1-473f-a8b9-b36f00b459d0","type":"Circle"},{"attributes":{"plot":{"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"}},"id":"5153911d-4292-474d-ad62-19b2ff4fb235","type":"ResetTool"},{"attributes":{"callback":null},"id":"e921ffa5-df3f-4de6-afcf-ef04e9b6094f","type":"DataRange1d"},{"attributes":{"formatter":{"id":"549c22e8-45bf-45c0-8f30-0a833c4f1caa","type":"BasicTickFormatter"},"plot":{"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"},"ticker":{"id":"05eb8459-9c85-4653-ab95-123e08526350","type":"BasicTicker"}},"id":"8b097faa-33e7-4f97-a0e6-17edc92501d2","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4a6c21ef-e583-43f9-8965-e30e01107e2b","type":"BoxAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"50ff3890-e0ac-4ab0-aa80-b8cd8c3946cf","type":"BoxAnnotation"},"plot":{"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"},"renderers":[{"id":"8f1d1888-08ff-4282-b06d-23a4d98fbf5f","type":"GlyphRenderer"}]},"id":"299e86c0-5a4a-4f9f-b3fe-972082ea4cce","type":"BoxSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd7b562d-3ff7-4c1e-8c99-77665f389c56","type":"Circle"},{"attributes":{},"id":"1ed1761a-6502-4e7a-be57-55b7fed5eb10","type":"ToolEvents"},{"attributes":{"dimension":1,"plot":{"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"},"ticker":{"id":"031804a1-5852-44d3-b6aa-04f97a1296ec","type":"BasicTicker"}},"id":"9700057e-ba7c-4275-9d2e-2958d0fcc76a","type":"Grid"},{"attributes":{},"id":"031804a1-5852-44d3-b6aa-04f97a1296ec","type":"BasicTicker"},{"attributes":{"below":[{"id":"8b097faa-33e7-4f97-a0e6-17edc92501d2","type":"LinearAxis"}],"left":[{"id":"09244375-618b-42cf-b4ea-02e7667c4a93","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8b097faa-33e7-4f97-a0e6-17edc92501d2","type":"LinearAxis"},{"id":"80b93d34-dac3-4280-bfa1-79c0293205e1","type":"Grid"},{"id":"09244375-618b-42cf-b4ea-02e7667c4a93","type":"LinearAxis"},{"id":"9700057e-ba7c-4275-9d2e-2958d0fcc76a","type":"Grid"},{"id":"4a6c21ef-e583-43f9-8965-e30e01107e2b","type":"BoxAnnotation"},{"id":"50ff3890-e0ac-4ab0-aa80-b8cd8c3946cf","type":"BoxAnnotation"},{"id":"8f1d1888-08ff-4282-b06d-23a4d98fbf5f","type":"GlyphRenderer"}],"title":null,"tool_events":{"id":"1ed1761a-6502-4e7a-be57-55b7fed5eb10","type":"ToolEvents"},"tools":[{"id":"ee3a522b-bf34-435e-8ce0-1b1400caae31","type":"BoxZoomTool"},{"id":"299e86c0-5a4a-4f9f-b3fe-972082ea4cce","type":"BoxSelectTool"},{"id":"d0660c1d-600d-4c1e-a31b-28e0ac096cc1","type":"CrosshairTool"},{"id":"1df6fdcc-98ad-41db-851f-e7b54e9f24de","type":"ResizeTool"},{"id":"5153911d-4292-474d-ad62-19b2ff4fb235","type":"ResetTool"}],"x_range":{"id":"e921ffa5-df3f-4de6-afcf-ef04e9b6094f","type":"DataRange1d"},"y_range":{"id":"6d533184-f1fa-401a-95ea-eb700ff73434","type":"DataRange1d"}},"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6ab47d45-8752-4ac0-a8ba-83733b5df76c","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"4a6c21ef-e583-43f9-8965-e30e01107e2b","type":"BoxAnnotation"},"plot":{"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"}},"id":"ee3a522b-bf34-435e-8ce0-1b1400caae31","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"6902695c-f94c-4a9d-b634-263cde17007b","type":"ColumnDataSource"},"glyph":{"id":"bd7b562d-3ff7-4c1e-8c99-77665f389c56","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"25610b15-0fc1-473f-a8b9-b36f00b459d0","type":"Circle"},"selection_glyph":null},"id":"8f1d1888-08ff-4282-b06d-23a4d98fbf5f","type":"GlyphRenderer"},{"attributes":{},"id":"549c22e8-45bf-45c0-8f30-0a833c4f1caa","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"6d533184-f1fa-401a-95ea-eb700ff73434","type":"DataRange1d"},{"attributes":{},"id":"05eb8459-9c85-4653-ab95-123e08526350","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6ab47d45-8752-4ac0-a8ba-83733b5df76c","type":"BasicTickFormatter"},"plot":{"id":"00ecc4ba-1783-4795-9c0c-7478e3742ce7","subtype":"Figure","type":"Plot"},"ticker":{"id":"031804a1-5852-44d3-b6aa-04f97a1296ec","type":"BasicTicker"}},"id":"09244375-618b-42cf-b4ea-02e7667c4a93","type":"LinearAxis"}],"root_ids":["00ecc4ba-1783-4795-9c0c-7478e3742ce7"]},"title":"Bokeh Application","version":"0.11.1-3-gd197fc8"}};
          var render_items = [{"docid":"ee2b7c27-f660-43e3-94bf-4788e62b0932","elementid":"5e266312-f637-436e-916c-b40dc59fe7a9","modelid":"00ecc4ba-1783-4795-9c0c-7478e3742ce7"}];
          
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