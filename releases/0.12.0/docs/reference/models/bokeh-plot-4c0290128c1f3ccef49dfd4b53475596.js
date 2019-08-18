document.addEventListener("DOMContentLoaded", function(event) {
    
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
      };var element = document.getElementById("3b2556b0-c23d-4621-93af-0a0dbb58a613");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3b2556b0-c23d-4621-93af-0a0dbb58a613' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"6ceadc50-80d9-4c09-8571-f0be106ed9bf":{"roots":{"references":[{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#CAB2D6"},"height":{"field":"h","units":"data"},"width":{"field":"w","units":"data"},"x":{"field":"x"},"y":{"field":"y"}},"id":"862bdd65-9437-413c-852e-7ac4650e7b22","type":"Ellipse"},{"attributes":{"dimension":1,"plot":{"id":"482eed12-a2e1-4e9d-8be3-905affb66f2e","type":"Plot"},"ticker":{"id":"57160561-faa7-488c-baca-f7a6d8487a09","type":"BasicTicker"}},"id":"ac1c3653-55a2-4264-bdbe-5128518e21a2","type":"Grid"},{"attributes":{},"id":"cb230628-02d9-4ca5-a8c0-c30a70fcd5dc","type":"ToolEvents"},{"attributes":{"below":[{"id":"11c1b766-d24b-4fb3-83eb-bb20de8ae5d1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"96e8756e-eae9-4efe-ab70-926fecd3bef2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"8dca2362-8114-4116-b3c7-a1ee217fa592","type":"GlyphRenderer"},{"id":"11c1b766-d24b-4fb3-83eb-bb20de8ae5d1","type":"LinearAxis"},{"id":"96e8756e-eae9-4efe-ab70-926fecd3bef2","type":"LinearAxis"},{"id":"4f20c747-38c1-4668-a8da-1fa3c21f38af","type":"Grid"},{"id":"ac1c3653-55a2-4264-bdbe-5128518e21a2","type":"Grid"}],"title":null,"tool_events":{"id":"cb230628-02d9-4ca5-a8c0-c30a70fcd5dc","type":"ToolEvents"},"toolbar":{"id":"2caf37d8-be10-4c51-996d-73546febd2b2","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"117695b4-8d4a-4d0f-a257-af15c1ebcfb7","type":"DataRange1d"},"y_range":{"id":"097451f5-3be0-44b0-9bfd-e2be1c455393","type":"DataRange1d"}},"id":"482eed12-a2e1-4e9d-8be3-905affb66f2e","type":"Plot"},{"attributes":{},"id":"0b1f8c32-6179-4f11-a34a-21ed807595f0","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"117695b4-8d4a-4d0f-a257-af15c1ebcfb7","type":"DataRange1d"},{"attributes":{"formatter":{"id":"81e3b6e4-01f3-49ff-9692-febf70b969a9","type":"BasicTickFormatter"},"plot":{"id":"482eed12-a2e1-4e9d-8be3-905affb66f2e","type":"Plot"},"ticker":{"id":"57160561-faa7-488c-baca-f7a6d8487a09","type":"BasicTicker"}},"id":"96e8756e-eae9-4efe-ab70-926fecd3bef2","type":"LinearAxis"},{"attributes":{"formatter":{"id":"0b1f8c32-6179-4f11-a34a-21ed807595f0","type":"BasicTickFormatter"},"plot":{"id":"482eed12-a2e1-4e9d-8be3-905affb66f2e","type":"Plot"},"ticker":{"id":"5bbb91de-a87d-4761-ab18-3fd0f05af096","type":"BasicTicker"}},"id":"11c1b766-d24b-4fb3-83eb-bb20de8ae5d1","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"2caf37d8-be10-4c51-996d-73546febd2b2","type":"Toolbar"},{"attributes":{},"id":"5bbb91de-a87d-4761-ab18-3fd0f05af096","type":"BasicTicker"},{"attributes":{},"id":"81e3b6e4-01f3-49ff-9692-febf70b969a9","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","h","w","x"],"data":{"h":[0.5,0.4125,0.35,0.3125,0.3,0.3125,0.35,0.4125,0.5],"w":[0.16666666666666666,0.19999999999999998,0.23333333333333334,0.26666666666666666,0.3,0.3333333333333333,0.36666666666666664,0.4,0.43333333333333335],"x":[-2.0,-1.5,-1.0,-0.5,0.0,0.5,1.0,1.5,2.0],"y":[4.0,2.25,1.0,0.25,0.0,0.25,1.0,2.25,4.0]}},"id":"6f94164b-9a74-491a-bfd5-c12a81279097","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"097451f5-3be0-44b0-9bfd-e2be1c455393","type":"DataRange1d"},{"attributes":{"data_source":{"id":"6f94164b-9a74-491a-bfd5-c12a81279097","type":"ColumnDataSource"},"glyph":{"id":"862bdd65-9437-413c-852e-7ac4650e7b22","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"8dca2362-8114-4116-b3c7-a1ee217fa592","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"482eed12-a2e1-4e9d-8be3-905affb66f2e","type":"Plot"},"ticker":{"id":"5bbb91de-a87d-4761-ab18-3fd0f05af096","type":"BasicTicker"}},"id":"4f20c747-38c1-4668-a8da-1fa3c21f38af","type":"Grid"},{"attributes":{},"id":"57160561-faa7-488c-baca-f7a6d8487a09","type":"BasicTicker"}],"root_ids":["482eed12-a2e1-4e9d-8be3-905affb66f2e"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"6ceadc50-80d9-4c09-8571-f0be106ed9bf","elementid":"3b2556b0-c23d-4621-93af-0a0dbb58a613","modelid":"482eed12-a2e1-4e9d-8be3-905affb66f2e"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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
});