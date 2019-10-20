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
      };var element = document.getElementById("ba0a746e-af00-448b-b7f5-8ecdebcc9e9f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ba0a746e-af00-448b-b7f5-8ecdebcc9e9f' but no matching script tag was found. ")
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
                var docs_json = {"029b46f1-8856-4ed3-beb6-3728f124c77c":{"roots":{"references":[{"attributes":{},"id":"8bfd80e1-2e60-4106-9b63-e25877381e4c","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"8bfd80e1-2e60-4106-9b63-e25877381e4c","type":"BasicTickFormatter"},"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f532e17-16e2-4f29-8684-35e07d1427bc","type":"BasicTicker"}},"id":"af98f42a-25e5-4b23-8742-dc3e46ac37ce","type":"LinearAxis"},{"attributes":{"data_source":{"id":"78e9cc4b-3c61-4a20-8424-51e0a4f4f7d5","type":"ColumnDataSource"},"glyph":{"id":"010da6bb-3f47-4480-961d-aab2390298e7","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"42281e3a-17de-480a-baae-e829210dacc3","type":"Circle"},"selection_glyph":null},"id":"0a8c5f16-e964-4146-a742-a99a4a2c197d","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"78e9cc4b-3c61-4a20-8424-51e0a4f4f7d5","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d85d1980-206c-415d-b77c-ad40e35bfa79","type":"DataRange1d"},{"attributes":{"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"}},"id":"463cb59d-9657-4b45-a381-ef8502f4ae39","type":"SaveTool"},{"attributes":{"below":[{"id":"af98f42a-25e5-4b23-8742-dc3e46ac37ce","type":"LinearAxis"}],"left":[{"id":"e54024ee-aca9-45d3-8243-0bd9384ea07e","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"af98f42a-25e5-4b23-8742-dc3e46ac37ce","type":"LinearAxis"},{"id":"348888aa-b06c-462c-bc17-dec112c7efac","type":"Grid"},{"id":"e54024ee-aca9-45d3-8243-0bd9384ea07e","type":"LinearAxis"},{"id":"5b8ec87e-03df-4fb7-812e-3e1960a55afa","type":"Grid"},{"id":"1afee6ae-cf00-4cca-8f97-590bb38599b5","type":"BoxAnnotation"},{"id":"0a8c5f16-e964-4146-a742-a99a4a2c197d","type":"GlyphRenderer"}],"title":{"id":"e4ce2da4-f77f-4e33-83df-111a52fce1da","type":"Title"},"tool_events":{"id":"93ab6675-8908-4c30-ab94-4c6fb0fe0b6e","type":"ToolEvents"},"toolbar":{"id":"d8eb3f40-ef70-4d55-9388-742bc8399c81","type":"Toolbar"},"x_range":{"id":"97dc67bb-0a45-48ab-875d-bebecddaadfa","type":"DataRange1d"},"y_range":{"id":"d85d1980-206c-415d-b77c-ad40e35bfa79","type":"DataRange1d"}},"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"97dc67bb-0a45-48ab-875d-bebecddaadfa","type":"DataRange1d"},{"attributes":{},"id":"93ab6675-8908-4c30-ab94-4c6fb0fe0b6e","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1afee6ae-cf00-4cca-8f97-590bb38599b5","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"1f532e17-16e2-4f29-8684-35e07d1427bc","type":"BasicTicker"}},"id":"348888aa-b06c-462c-bc17-dec112c7efac","type":"Grid"},{"attributes":{"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"}},"id":"c989a174-7da8-450c-8c84-e354f9348156","type":"ResetTool"},{"attributes":{"overlay":{"id":"1afee6ae-cf00-4cca-8f97-590bb38599b5","type":"BoxAnnotation"},"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"}},"id":"46a04c30-77cc-459f-849d-432be2fab89f","type":"BoxZoomTool"},{"attributes":{},"id":"1f532e17-16e2-4f29-8684-35e07d1427bc","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"42281e3a-17de-480a-baae-e829210dacc3","type":"Circle"},{"attributes":{"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"}},"id":"1b9744f4-734d-4584-9354-d0b135e179d8","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"de872d01-55ac-41cd-8bb0-cdad9842a772","type":"PanTool"},{"id":"1b9744f4-734d-4584-9354-d0b135e179d8","type":"WheelZoomTool"},{"id":"46a04c30-77cc-459f-849d-432be2fab89f","type":"BoxZoomTool"},{"id":"463cb59d-9657-4b45-a381-ef8502f4ae39","type":"SaveTool"},{"id":"c989a174-7da8-450c-8c84-e354f9348156","type":"ResetTool"},{"id":"7cbe6748-90d0-4fd5-b119-5d540adf2044","type":"HelpTool"}]},"id":"d8eb3f40-ef70-4d55-9388-742bc8399c81","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"010da6bb-3f47-4480-961d-aab2390298e7","type":"Circle"},{"attributes":{"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"}},"id":"7cbe6748-90d0-4fd5-b119-5d540adf2044","type":"HelpTool"},{"attributes":{},"id":"0c2d1870-e812-4a4f-afc0-27d3e4cd04b2","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"}},"id":"de872d01-55ac-41cd-8bb0-cdad9842a772","type":"PanTool"},{"attributes":{"dimension":1,"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"6cab3a40-2ef6-416d-9d46-072d8b3b2e23","type":"BasicTicker"}},"id":"5b8ec87e-03df-4fb7-812e-3e1960a55afa","type":"Grid"},{"attributes":{},"id":"6cab3a40-2ef6-416d-9d46-072d8b3b2e23","type":"BasicTicker"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"0c2d1870-e812-4a4f-afc0-27d3e4cd04b2","type":"BasicTickFormatter"},"plot":{"id":"581e2aed-6362-4aff-ac4b-7b83297664b6","subtype":"Figure","type":"Plot"},"ticker":{"id":"6cab3a40-2ef6-416d-9d46-072d8b3b2e23","type":"BasicTicker"}},"id":"e54024ee-aca9-45d3-8243-0bd9384ea07e","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"e4ce2da4-f77f-4e33-83df-111a52fce1da","type":"Title"}],"root_ids":["581e2aed-6362-4aff-ac4b-7b83297664b6"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"029b46f1-8856-4ed3-beb6-3728f124c77c","elementid":"ba0a746e-af00-448b-b7f5-8ecdebcc9e9f","modelid":"581e2aed-6362-4aff-ac4b-7b83297664b6"}];
                
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
