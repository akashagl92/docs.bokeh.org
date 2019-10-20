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
      };var element = document.getElementById("2314926d-c179-4baf-9eba-6c955daf7131");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2314926d-c179-4baf-9eba-6c955daf7131' but no matching script tag was found. ")
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
                var docs_json = {"3007239c-83d3-4d08-910e-7e3debb60c0f":{"roots":{"references":[{"attributes":{},"id":"bbfc9b85-fc4c-44cb-8ae0-25ebf0956ecc","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#DE2D26"},"line_color":{"value":"#DE2D26"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"acea88a4-d54a-435e-ab1d-2600418e8043","type":"InvertedTriangle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6dff2c6d-2272-48fe-a1f9-647992fa0171","type":"BoxAnnotation"},{"attributes":{},"id":"98f3af27-791b-47e4-bb1c-b17a8cf75ffb","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f359174b-b9ec-4c47-8f44-6b175703beef","type":"DataRange1d"},{"attributes":{"formatter":{"id":"bea6144f-a982-45a8-886c-364a620997d5","type":"BasicTickFormatter"},"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbfc9b85-fc4c-44cb-8ae0-25ebf0956ecc","type":"BasicTicker"}},"id":"d655b163-25f4-46c9-881b-3e6ae4d5604d","type":"LinearAxis"},{"attributes":{"below":[{"id":"d655b163-25f4-46c9-881b-3e6ae4d5604d","type":"LinearAxis"}],"left":[{"id":"aa95b680-4000-4720-ade7-807f0ed454d8","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d655b163-25f4-46c9-881b-3e6ae4d5604d","type":"LinearAxis"},{"id":"cf9f58bb-4fc5-458f-a116-3f59c71d773e","type":"Grid"},{"id":"aa95b680-4000-4720-ade7-807f0ed454d8","type":"LinearAxis"},{"id":"ea4ba52f-30d2-49bc-a27d-c5a3defd5c2d","type":"Grid"},{"id":"6dff2c6d-2272-48fe-a1f9-647992fa0171","type":"BoxAnnotation"},{"id":"0e72051b-9ee6-4034-8280-265b4d0a0cc4","type":"GlyphRenderer"}],"title":{"id":"bfcd2862-0bee-4eac-8e42-cbf414d7b220","type":"Title"},"tool_events":{"id":"26e3126e-771b-4e11-9a46-a7b49cfe940f","type":"ToolEvents"},"toolbar":{"id":"8364c1b3-0b7d-4191-8b74-df3556a43981","type":"Toolbar"},"x_range":{"id":"67280f56-c22a-4462-964e-0f9951b98bc2","type":"DataRange1d"},"y_range":{"id":"f359174b-b9ec-4c47-8f44-6b175703beef","type":"DataRange1d"}},"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbfc9b85-fc4c-44cb-8ae0-25ebf0956ecc","type":"BasicTicker"}},"id":"cf9f58bb-4fc5-458f-a116-3f59c71d773e","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f2ecaa1-448d-4b9b-97a9-820227fad76d","type":"BasicTicker"}},"id":"ea4ba52f-30d2-49bc-a27d-c5a3defd5c2d","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"5c119f06-c39c-452b-badd-91c9b5e4b11b","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"98f3af27-791b-47e4-bb1c-b17a8cf75ffb","type":"BasicTickFormatter"},"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f2ecaa1-448d-4b9b-97a9-820227fad76d","type":"BasicTicker"}},"id":"aa95b680-4000-4720-ade7-807f0ed454d8","type":"LinearAxis"},{"attributes":{"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"}},"id":"47e2f7bf-1839-4e61-bf25-ca2a9f9bac29","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"8b33cff0-23e4-44cd-8480-bbbbab429edb","type":"PanTool"},{"id":"73c74110-945d-4c67-bb0e-c3efb8667ddb","type":"WheelZoomTool"},{"id":"7865f06f-17e6-4283-9eae-76ade96497af","type":"BoxZoomTool"},{"id":"47e2f7bf-1839-4e61-bf25-ca2a9f9bac29","type":"SaveTool"},{"id":"d2ee1977-57ed-43b7-b068-658d27c9f64d","type":"ResetTool"},{"id":"674ac8b8-55a9-48e5-89d6-ecfde80ede32","type":"HelpTool"}]},"id":"8364c1b3-0b7d-4191-8b74-df3556a43981","type":"Toolbar"},{"attributes":{"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"}},"id":"674ac8b8-55a9-48e5-89d6-ecfde80ede32","type":"HelpTool"},{"attributes":{"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"}},"id":"73c74110-945d-4c67-bb0e-c3efb8667ddb","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"808d5e99-594c-4238-8b8d-5612396fbfe5","type":"InvertedTriangle"},{"attributes":{},"id":"26e3126e-771b-4e11-9a46-a7b49cfe940f","type":"ToolEvents"},{"attributes":{"overlay":{"id":"6dff2c6d-2272-48fe-a1f9-647992fa0171","type":"BoxAnnotation"},"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"}},"id":"7865f06f-17e6-4283-9eae-76ade96497af","type":"BoxZoomTool"},{"attributes":{"plot":null,"text":""},"id":"bfcd2862-0bee-4eac-8e42-cbf414d7b220","type":"Title"},{"attributes":{"callback":null},"id":"67280f56-c22a-4462-964e-0f9951b98bc2","type":"DataRange1d"},{"attributes":{},"id":"4f2ecaa1-448d-4b9b-97a9-820227fad76d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5c119f06-c39c-452b-badd-91c9b5e4b11b","type":"ColumnDataSource"},"glyph":{"id":"acea88a4-d54a-435e-ab1d-2600418e8043","type":"InvertedTriangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"808d5e99-594c-4238-8b8d-5612396fbfe5","type":"InvertedTriangle"},"selection_glyph":null},"id":"0e72051b-9ee6-4034-8280-265b4d0a0cc4","type":"GlyphRenderer"},{"attributes":{},"id":"bea6144f-a982-45a8-886c-364a620997d5","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"}},"id":"d2ee1977-57ed-43b7-b068-658d27c9f64d","type":"ResetTool"},{"attributes":{"plot":{"id":"71ae2fc5-58f9-4da7-940c-d90a510e94d0","subtype":"Figure","type":"Plot"}},"id":"8b33cff0-23e4-44cd-8480-bbbbab429edb","type":"PanTool"}],"root_ids":["71ae2fc5-58f9-4da7-940c-d90a510e94d0"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"3007239c-83d3-4d08-910e-7e3debb60c0f","elementid":"2314926d-c179-4baf-9eba-6c955daf7131","modelid":"71ae2fc5-58f9-4da7-940c-d90a510e94d0"}];
                
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
