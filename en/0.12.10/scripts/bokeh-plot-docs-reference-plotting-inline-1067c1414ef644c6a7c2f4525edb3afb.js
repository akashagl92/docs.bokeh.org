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
      };var element = document.getElementById("59ba0d6b-968c-409d-adfb-6b3194297a07");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '59ba0d6b-968c-409d-adfb-6b3194297a07' but no matching script tag was found. ")
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
                    var docs_json = {"37ad3689-cffb-474a-b906-7d7f966371a4":{"roots":{"references":[{"attributes":{"overlay":{"id":"a59445ff-0aa5-4a86-a53d-11fdbe0f5a27","type":"BoxAnnotation"}},"id":"eef2f503-ad05-4835-b441-47fcdab81173","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"e0965cb3-2749-4db0-8d66-3776f3ffc699","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a59445ff-0aa5-4a86-a53d-11fdbe0f5a27","type":"BoxAnnotation"},{"attributes":{},"id":"d2eea271-6099-4f2d-af48-b6141099554a","type":"BasicTicker"},{"attributes":{},"id":"ab9b7857-7ae2-4229-93a9-5a99763130ad","type":"SaveTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8d97e906-ab4f-441e-a710-501cd464ca97","type":"Oval"},{"attributes":{},"id":"0f0040c8-8973-4fa8-adfb-97ce8fd7f9c2","type":"ResetTool"},{"attributes":{"formatter":{"id":"dc089c6c-8a7d-468c-a49a-529150e08ae4","type":"BasicTickFormatter"},"plot":{"id":"8f6fa50d-7666-48ce-a67d-d78029a9cc6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2eea271-6099-4f2d-af48-b6141099554a","type":"BasicTicker"}},"id":"af3016b1-0748-4ece-a5be-4386dd06a73f","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4292dd1e-354b-45ba-b306-6059e4b7c934","type":"PanTool"},{"id":"7f1570e6-555d-4270-ad6e-165f505a97e6","type":"WheelZoomTool"},{"id":"eef2f503-ad05-4835-b441-47fcdab81173","type":"BoxZoomTool"},{"id":"ab9b7857-7ae2-4229-93a9-5a99763130ad","type":"SaveTool"},{"id":"0f0040c8-8973-4fa8-adfb-97ce8fd7f9c2","type":"ResetTool"},{"id":"b53f3d9f-232d-4527-8049-8957d9551edc","type":"HelpTool"}]},"id":"1d089e2f-883e-4762-88c4-8987a2a596b0","type":"Toolbar"},{"attributes":{},"id":"b53f3d9f-232d-4527-8049-8957d9551edc","type":"HelpTool"},{"attributes":{"callback":null},"id":"b943dddb-e2ae-412b-b929-22e4370dd13f","type":"DataRange1d"},{"attributes":{"below":[{"id":"af3016b1-0748-4ece-a5be-4386dd06a73f","type":"LinearAxis"}],"left":[{"id":"ddbd8da7-1815-4948-94e0-d0f9ca8808c2","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"af3016b1-0748-4ece-a5be-4386dd06a73f","type":"LinearAxis"},{"id":"e78bab66-3c9c-4405-aa9b-f66952e9c0c1","type":"Grid"},{"id":"ddbd8da7-1815-4948-94e0-d0f9ca8808c2","type":"LinearAxis"},{"id":"6573e2b8-60b5-4edb-a89a-0dcf2cd48f76","type":"Grid"},{"id":"a59445ff-0aa5-4a86-a53d-11fdbe0f5a27","type":"BoxAnnotation"},{"id":"106113cf-bd62-40db-91bb-50396de1a189","type":"GlyphRenderer"}],"title":{"id":"f53c01be-28de-4c0e-8366-4e3a93e12b74","type":"Title"},"toolbar":{"id":"1d089e2f-883e-4762-88c4-8987a2a596b0","type":"Toolbar"},"x_range":{"id":"e0965cb3-2749-4db0-8d66-3776f3ffc699","type":"DataRange1d"},"x_scale":{"id":"05a1e1cc-f282-4b63-8628-6687a7a545c0","type":"LinearScale"},"y_range":{"id":"b943dddb-e2ae-412b-b929-22e4370dd13f","type":"DataRange1d"},"y_scale":{"id":"705160ff-463e-45e9-acaf-77dc6e2df52b","type":"LinearScale"}},"id":"8f6fa50d-7666-48ce-a67d-d78029a9cc6a","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"dc089c6c-8a7d-468c-a49a-529150e08ae4","type":"BasicTickFormatter"},{"attributes":{},"id":"05a1e1cc-f282-4b63-8628-6687a7a545c0","type":"LinearScale"},{"attributes":{},"id":"8930cca3-718e-40f9-b8e6-01562a0e768c","type":"BasicTickFormatter"},{"attributes":{},"id":"705160ff-463e-45e9-acaf-77dc6e2df52b","type":"LinearScale"},{"attributes":{"data_source":{"id":"7a553b18-1ca4-4a34-9eec-cff42f878908","type":"ColumnDataSource"},"glyph":{"id":"8d97e906-ab4f-441e-a710-501cd464ca97","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6794b1c4-2383-4a98-9404-3100d0a1c445","type":"Oval"},"selection_glyph":null,"view":{"id":"a6122136-ded2-4dee-832f-3d48308138b3","type":"CDSView"}},"id":"106113cf-bd62-40db-91bb-50396de1a189","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"8f6fa50d-7666-48ce-a67d-d78029a9cc6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"d2eea271-6099-4f2d-af48-b6141099554a","type":"BasicTicker"}},"id":"e78bab66-3c9c-4405-aa9b-f66952e9c0c1","type":"Grid"},{"attributes":{"formatter":{"id":"8930cca3-718e-40f9-b8e6-01562a0e768c","type":"BasicTickFormatter"},"plot":{"id":"8f6fa50d-7666-48ce-a67d-d78029a9cc6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea733d71-3781-48da-b185-a69cb4c7c10a","type":"BasicTicker"}},"id":"ddbd8da7-1815-4948-94e0-d0f9ca8808c2","type":"LinearAxis"},{"attributes":{},"id":"ea733d71-3781-48da-b185-a69cb4c7c10a","type":"BasicTicker"},{"attributes":{},"id":"4292dd1e-354b-45ba-b306-6059e4b7c934","type":"PanTool"},{"attributes":{},"id":"7f1570e6-555d-4270-ad6e-165f505a97e6","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"8f6fa50d-7666-48ce-a67d-d78029a9cc6a","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea733d71-3781-48da-b185-a69cb4c7c10a","type":"BasicTicker"}},"id":"6573e2b8-60b5-4edb-a89a-0dcf2cd48f76","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6794b1c4-2383-4a98-9404-3100d0a1c445","type":"Oval"},{"attributes":{"plot":null,"text":""},"id":"f53c01be-28de-4c0e-8366-4e3a93e12b74","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"7a553b18-1ca4-4a34-9eec-cff42f878908","type":"ColumnDataSource"},{"attributes":{"source":{"id":"7a553b18-1ca4-4a34-9eec-cff42f878908","type":"ColumnDataSource"}},"id":"a6122136-ded2-4dee-832f-3d48308138b3","type":"CDSView"}],"root_ids":["8f6fa50d-7666-48ce-a67d-d78029a9cc6a"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"37ad3689-cffb-474a-b906-7d7f966371a4","elementid":"59ba0d6b-968c-409d-adfb-6b3194297a07","modelid":"8f6fa50d-7666-48ce-a67d-d78029a9cc6a"}];
                
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
