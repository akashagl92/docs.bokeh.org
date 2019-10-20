(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
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
      };var element = document.getElementById("c0a2b679-018a-4497-b842-b3121418a376");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c0a2b679-018a-4497-b842-b3121418a376' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"136a98ce-12b6-45d1-8e47-691ed772a750":{"roots":{"references":[{"attributes":{"callback":null},"id":"4ed28b43-0295-498a-ab15-45e340c29753","type":"DataRange1d"},{"attributes":{"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"}},"id":"ba79a4d8-3ebe-4e60-9a6a-3a65070a4649","type":"SaveTool"},{"attributes":{},"id":"9893070b-f27d-497b-a9b5-f83c4eedb706","type":"BasicTicker"},{"attributes":{"bounds":[2,4],"formatter":{"id":"4a4f5c8e-cff3-41a4-99e8-4fe2d68ebedc","type":"BasicTickFormatter"},"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"},"ticker":{"id":"14b5b029-0628-45a8-8fab-e1be31b13bd1","type":"BasicTicker"}},"id":"a4f86b8d-dc35-43de-9d5b-5f9c64ec8f9e","type":"LinearAxis"},{"attributes":{},"id":"4a4f5c8e-cff3-41a4-99e8-4fe2d68ebedc","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"}},"id":"69ff4b7f-bbe4-4fc0-9ee4-069bba6f126c","type":"PanTool"},{"attributes":{"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"}},"id":"7aca5e2c-d53e-4b0e-a02c-3e577d7e3b79","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"af54781f-3d07-4c94-8452-7ee664b525d3","type":"ColumnDataSource"},"glyph":{"id":"5f87e45d-31a9-49ca-bdab-ad6347c15476","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7d67448c-bc4d-491b-90aa-7fb754ca34cf","type":"Circle"},"selection_glyph":null},"id":"d23c22be-9f5f-46d6-be0b-91f199842702","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5f87e45d-31a9-49ca-bdab-ad6347c15476","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7d67448c-bc4d-491b-90aa-7fb754ca34cf","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"},"ticker":{"id":"9893070b-f27d-497b-a9b5-f83c4eedb706","type":"BasicTicker"}},"id":"b986a5cc-75ea-4f5a-861c-b5bc1d5c3713","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"26bf820f-4e3a-4966-8710-55d90cda0fbf","type":"Title"},{"attributes":{"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"},"ticker":{"id":"14b5b029-0628-45a8-8fab-e1be31b13bd1","type":"BasicTicker"}},"id":"ab396982-a723-467e-91c8-ada9972a2699","type":"Grid"},{"attributes":{"callback":null},"id":"c20466f5-8b9a-45d5-b85d-48dc4e96384a","type":"DataRange1d"},{"attributes":{"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"}},"id":"6655121e-0215-4952-ad05-13daedfe31dc","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"af54781f-3d07-4c94-8452-7ee664b525d3","type":"ColumnDataSource"},{"attributes":{},"id":"acaf688a-c3c0-4e82-89c0-0286df10e157","type":"ToolEvents"},{"attributes":{"overlay":{"id":"75178109-ce9d-4320-9c4f-5b2ee92009b8","type":"BoxAnnotation"},"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"}},"id":"d447657f-a4ac-4c8d-9a2a-22e53206be9f","type":"BoxZoomTool"},{"attributes":{"below":[{"id":"a4f86b8d-dc35-43de-9d5b-5f9c64ec8f9e","type":"LinearAxis"}],"left":[{"id":"4ca2e263-8d3d-492c-972f-32cb9d654ba6","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"a4f86b8d-dc35-43de-9d5b-5f9c64ec8f9e","type":"LinearAxis"},{"id":"ab396982-a723-467e-91c8-ada9972a2699","type":"Grid"},{"id":"4ca2e263-8d3d-492c-972f-32cb9d654ba6","type":"LinearAxis"},{"id":"b986a5cc-75ea-4f5a-861c-b5bc1d5c3713","type":"Grid"},{"id":"75178109-ce9d-4320-9c4f-5b2ee92009b8","type":"BoxAnnotation"},{"id":"d23c22be-9f5f-46d6-be0b-91f199842702","type":"GlyphRenderer"}],"title":{"id":"26bf820f-4e3a-4966-8710-55d90cda0fbf","type":"Title"},"tool_events":{"id":"acaf688a-c3c0-4e82-89c0-0286df10e157","type":"ToolEvents"},"toolbar":{"id":"29e35e1c-4b80-47e4-bac3-0fa0ce9d4ab7","type":"Toolbar"},"x_range":{"id":"c20466f5-8b9a-45d5-b85d-48dc4e96384a","type":"DataRange1d"},"y_range":{"id":"4ed28b43-0295-498a-ab15-45e340c29753","type":"DataRange1d"}},"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"14b5b029-0628-45a8-8fab-e1be31b13bd1","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"75178109-ce9d-4320-9c4f-5b2ee92009b8","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"d45374dc-ee7b-48e6-8318-80330b450fe6","type":"BasicTickFormatter"},"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"},"ticker":{"id":"9893070b-f27d-497b-a9b5-f83c4eedb706","type":"BasicTicker"}},"id":"4ca2e263-8d3d-492c-972f-32cb9d654ba6","type":"LinearAxis"},{"attributes":{},"id":"d45374dc-ee7b-48e6-8318-80330b450fe6","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072","subtype":"Figure","type":"Plot"}},"id":"a44e4c0d-df1c-482d-9e59-bdee62b04eb0","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"69ff4b7f-bbe4-4fc0-9ee4-069bba6f126c","type":"PanTool"},{"id":"7aca5e2c-d53e-4b0e-a02c-3e577d7e3b79","type":"WheelZoomTool"},{"id":"d447657f-a4ac-4c8d-9a2a-22e53206be9f","type":"BoxZoomTool"},{"id":"ba79a4d8-3ebe-4e60-9a6a-3a65070a4649","type":"SaveTool"},{"id":"6655121e-0215-4952-ad05-13daedfe31dc","type":"ResetTool"},{"id":"a44e4c0d-df1c-482d-9e59-bdee62b04eb0","type":"HelpTool"}]},"id":"29e35e1c-4b80-47e4-bac3-0fa0ce9d4ab7","type":"Toolbar"}],"root_ids":["f89416ad-f77d-4fdb-aa38-e8e86d2a1072"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"136a98ce-12b6-45d1-8e47-691ed772a750","elementid":"c0a2b679-018a-4497-b842-b3121418a376","modelid":"f89416ad-f77d-4fdb-aa38-e8e86d2a1072"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
