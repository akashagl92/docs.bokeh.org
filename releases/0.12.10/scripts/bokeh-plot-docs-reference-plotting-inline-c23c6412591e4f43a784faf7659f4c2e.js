(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("2fc60470-56dc-46a2-8858-bb2d79d7b192");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '2fc60470-56dc-46a2-8858-bb2d79d7b192' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"f8802a09-2bcd-4d7a-8bed-ddcb6065ff46":{"roots":{"references":[{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"f62562f8-9bc9-4db9-86cf-13d2cbb81433","type":"Ellipse"},{"attributes":{},"id":"75705b52-246f-45f2-bd87-0a7a6b36c51b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"796f5733-eb08-4187-b671-68beb86cef50","type":"BasicTickFormatter"},"plot":{"id":"4a46be25-8474-4391-b05f-509f71a41e0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b146134-46be-4a86-ab87-c8fd42a6953f","type":"BasicTicker"}},"id":"d785f64b-3c97-4f3f-ac8d-a3043e6e3a70","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"30e8065f-c653-4578-b909-fde6d8b4b37b","type":"Ellipse"},{"attributes":{},"id":"63b4c9d2-fc53-4665-b1c9-5644b9660f70","type":"LinearScale"},{"attributes":{"source":{"id":"60f517e7-3bec-41bb-b679-ae8c16651c45","type":"ColumnDataSource"}},"id":"41bf72cc-dd15-4481-bc99-ac53e4657e73","type":"CDSView"},{"attributes":{"callback":null},"id":"46e3a375-be1a-4656-a1cd-94fc8f77af04","type":"DataRange1d"},{"attributes":{"plot":{"id":"4a46be25-8474-4391-b05f-509f71a41e0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e357d9a-6a26-42b5-aa71-cca3287b634a","type":"BasicTicker"}},"id":"4e335126-be93-452d-b1e0-a2aadcd814a3","type":"Grid"},{"attributes":{},"id":"8b146134-46be-4a86-ab87-c8fd42a6953f","type":"BasicTicker"},{"attributes":{},"id":"dcdc85e6-0bcc-4ca3-9211-7c0eef9d7314","type":"WheelZoomTool"},{"attributes":{},"id":"04861f52-4c3c-44cc-b862-9c393ae17ac9","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1cc32b1c-11f3-4e2d-b6be-9a355b3c05ed","type":"BoxAnnotation"},{"attributes":{},"id":"ad4c5d2d-5c6a-4110-bad8-18276cb32e82","type":"PanTool"},{"attributes":{"data_source":{"id":"60f517e7-3bec-41bb-b679-ae8c16651c45","type":"ColumnDataSource"},"glyph":{"id":"f62562f8-9bc9-4db9-86cf-13d2cbb81433","type":"Ellipse"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"30e8065f-c653-4578-b909-fde6d8b4b37b","type":"Ellipse"},"selection_glyph":null,"view":{"id":"41bf72cc-dd15-4481-bc99-ac53e4657e73","type":"CDSView"}},"id":"08903b5e-792f-4d57-8fcf-471ec4b55174","type":"GlyphRenderer"},{"attributes":{},"id":"5e357d9a-6a26-42b5-aa71-cca3287b634a","type":"BasicTicker"},{"attributes":{},"id":"ee6bbdcf-7095-4436-919c-c266db65dd3c","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"7a61ff5d-f39e-4be4-acc0-e491f9a66b3b","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"4a46be25-8474-4391-b05f-509f71a41e0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"8b146134-46be-4a86-ab87-c8fd42a6953f","type":"BasicTicker"}},"id":"91d06d73-afe9-4d7b-83c4-661b69c21755","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"60f517e7-3bec-41bb-b679-ae8c16651c45","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"1cc32b1c-11f3-4e2d-b6be-9a355b3c05ed","type":"BoxAnnotation"}},"id":"2330e369-8f9a-46c5-9657-082a41fb5633","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ad4c5d2d-5c6a-4110-bad8-18276cb32e82","type":"PanTool"},{"id":"dcdc85e6-0bcc-4ca3-9211-7c0eef9d7314","type":"WheelZoomTool"},{"id":"2330e369-8f9a-46c5-9657-082a41fb5633","type":"BoxZoomTool"},{"id":"723849cb-862a-40b2-90ed-d37941e312b4","type":"SaveTool"},{"id":"34e7aa71-5c96-40dd-bd7a-a1c693a24268","type":"ResetTool"},{"id":"04861f52-4c3c-44cc-b862-9c393ae17ac9","type":"HelpTool"}]},"id":"b5506dee-750b-415b-8727-62f34dc80aed","type":"Toolbar"},{"attributes":{"formatter":{"id":"75705b52-246f-45f2-bd87-0a7a6b36c51b","type":"BasicTickFormatter"},"plot":{"id":"4a46be25-8474-4391-b05f-509f71a41e0d","subtype":"Figure","type":"Plot"},"ticker":{"id":"5e357d9a-6a26-42b5-aa71-cca3287b634a","type":"BasicTicker"}},"id":"66766537-2abc-4577-996f-e7ab2e634b43","type":"LinearAxis"},{"attributes":{},"id":"34e7aa71-5c96-40dd-bd7a-a1c693a24268","type":"ResetTool"},{"attributes":{"callback":null},"id":"add9161b-6e99-4e0e-98ad-bd44152cd342","type":"DataRange1d"},{"attributes":{"below":[{"id":"66766537-2abc-4577-996f-e7ab2e634b43","type":"LinearAxis"}],"left":[{"id":"d785f64b-3c97-4f3f-ac8d-a3043e6e3a70","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"66766537-2abc-4577-996f-e7ab2e634b43","type":"LinearAxis"},{"id":"4e335126-be93-452d-b1e0-a2aadcd814a3","type":"Grid"},{"id":"d785f64b-3c97-4f3f-ac8d-a3043e6e3a70","type":"LinearAxis"},{"id":"91d06d73-afe9-4d7b-83c4-661b69c21755","type":"Grid"},{"id":"1cc32b1c-11f3-4e2d-b6be-9a355b3c05ed","type":"BoxAnnotation"},{"id":"08903b5e-792f-4d57-8fcf-471ec4b55174","type":"GlyphRenderer"}],"title":{"id":"7a61ff5d-f39e-4be4-acc0-e491f9a66b3b","type":"Title"},"toolbar":{"id":"b5506dee-750b-415b-8727-62f34dc80aed","type":"Toolbar"},"x_range":{"id":"add9161b-6e99-4e0e-98ad-bd44152cd342","type":"DataRange1d"},"x_scale":{"id":"63b4c9d2-fc53-4665-b1c9-5644b9660f70","type":"LinearScale"},"y_range":{"id":"46e3a375-be1a-4656-a1cd-94fc8f77af04","type":"DataRange1d"},"y_scale":{"id":"ee6bbdcf-7095-4436-919c-c266db65dd3c","type":"LinearScale"}},"id":"4a46be25-8474-4391-b05f-509f71a41e0d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"796f5733-eb08-4187-b671-68beb86cef50","type":"BasicTickFormatter"},{"attributes":{},"id":"723849cb-862a-40b2-90ed-d37941e312b4","type":"SaveTool"}],"root_ids":["4a46be25-8474-4391-b05f-509f71a41e0d"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"f8802a09-2bcd-4d7a-8bed-ddcb6065ff46","elementid":"2fc60470-56dc-46a2-8858-bb2d79d7b192","modelid":"4a46be25-8474-4391-b05f-509f71a41e0d"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
