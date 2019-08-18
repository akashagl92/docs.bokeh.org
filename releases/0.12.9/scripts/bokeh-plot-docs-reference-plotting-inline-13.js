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
      };var element = document.getElementById("45c03ddc-5af1-4d1d-b2b5-c1669a1c9e57");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '45c03ddc-5af1-4d1d-b2b5-c1669a1c9e57' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.9.min.js"];
    
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
                    var docs_json = {"0e329c4f-1828-4bd0-9c5a-33d98cc5621c":{"roots":{"references":[{"attributes":{},"id":"7f2913ad-16ad-4acc-b14a-f24aaf49ec84","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"ab2547c7-33b5-44d7-8de2-f16f5cbb6b09","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f2913ad-16ad-4acc-b14a-f24aaf49ec84","type":"BasicTicker"}},"id":"782fa1bf-eb1a-4a8a-9eae-060be4ad2ccc","type":"Grid"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"6d5e9a62-f635-47e4-9954-9b974d13007d","type":"Oval"},{"attributes":{},"id":"e5ee32e2-4a1a-4e43-9e99-f2261d8e0f11","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4dd3b0c7-b950-426f-949a-7ee42d2dfec5","type":"ColumnDataSource"},"glyph":{"id":"221f34c9-96bc-46dc-a94b-c040bcf8168d","type":"Oval"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6d5e9a62-f635-47e4-9954-9b974d13007d","type":"Oval"},"selection_glyph":null,"view":{"id":"f273b725-6e88-4e1b-8d71-d6320e93f4c9","type":"CDSView"}},"id":"a115d374-9221-41d6-81d3-126d8758164f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"4dd3b0c7-b950-426f-949a-7ee42d2dfec5","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"ed81200c-5b28-4086-ab8b-5aac2fea7606","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"57f300bc-5522-47f6-8fe8-1203a3812828","type":"LinearAxis"}],"left":[{"id":"74645976-ed78-4bf8-b76a-2b54c674018f","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"57f300bc-5522-47f6-8fe8-1203a3812828","type":"LinearAxis"},{"id":"ed6f8edc-05aa-4822-be97-7db8b18904e6","type":"Grid"},{"id":"74645976-ed78-4bf8-b76a-2b54c674018f","type":"LinearAxis"},{"id":"782fa1bf-eb1a-4a8a-9eae-060be4ad2ccc","type":"Grid"},{"id":"ed81200c-5b28-4086-ab8b-5aac2fea7606","type":"BoxAnnotation"},{"id":"a115d374-9221-41d6-81d3-126d8758164f","type":"GlyphRenderer"}],"title":{"id":"10320daf-7026-4b06-8073-591a632e3088","type":"Title"},"toolbar":{"id":"6951a752-be69-48bb-9773-cc44701e09db","type":"Toolbar"},"x_range":{"id":"dd113dae-f702-4c04-a0e9-8a4e10780090","type":"DataRange1d"},"x_scale":{"id":"51b17e8e-1f95-4dfe-a095-0d6d68fad4c0","type":"LinearScale"},"y_range":{"id":"a98b3103-4dad-4f4d-854e-827738a008e5","type":"DataRange1d"},"y_scale":{"id":"5d0b8b9d-f9e7-426e-b882-3b1a31e4a7b3","type":"LinearScale"}},"id":"ab2547c7-33b5-44d7-8de2-f16f5cbb6b09","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"80b96c6d-f85f-428d-a262-09b33ea0023c","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"80b96c6d-f85f-428d-a262-09b33ea0023c","type":"PanTool"},{"id":"4a178352-7baf-4ae8-8f98-04a09a43cd39","type":"WheelZoomTool"},{"id":"765cecfc-d5de-4adb-8cfc-e5a6bcf22f7a","type":"BoxZoomTool"},{"id":"8ea28771-c13f-44c8-a06b-832daa0a0d12","type":"SaveTool"},{"id":"2dba0081-39a2-4b82-aecc-30c89682e424","type":"ResetTool"},{"id":"6de726aa-ab55-4353-8024-8fbd3c90ac1e","type":"HelpTool"}]},"id":"6951a752-be69-48bb-9773-cc44701e09db","type":"Toolbar"},{"attributes":{"source":{"id":"4dd3b0c7-b950-426f-949a-7ee42d2dfec5","type":"ColumnDataSource"}},"id":"f273b725-6e88-4e1b-8d71-d6320e93f4c9","type":"CDSView"},{"attributes":{"callback":null},"id":"dd113dae-f702-4c04-a0e9-8a4e10780090","type":"DataRange1d"},{"attributes":{},"id":"4a178352-7baf-4ae8-8f98-04a09a43cd39","type":"WheelZoomTool"},{"attributes":{},"id":"b5cbc46b-0d19-489e-94b5-7147db202dbc","type":"BasicTicker"},{"attributes":{"overlay":{"id":"ed81200c-5b28-4086-ab8b-5aac2fea7606","type":"BoxAnnotation"}},"id":"765cecfc-d5de-4adb-8cfc-e5a6bcf22f7a","type":"BoxZoomTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"221f34c9-96bc-46dc-a94b-c040bcf8168d","type":"Oval"},{"attributes":{},"id":"8ea28771-c13f-44c8-a06b-832daa0a0d12","type":"SaveTool"},{"attributes":{"formatter":{"id":"e5ee32e2-4a1a-4e43-9e99-f2261d8e0f11","type":"BasicTickFormatter"},"plot":{"id":"ab2547c7-33b5-44d7-8de2-f16f5cbb6b09","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5cbc46b-0d19-489e-94b5-7147db202dbc","type":"BasicTicker"}},"id":"57f300bc-5522-47f6-8fe8-1203a3812828","type":"LinearAxis"},{"attributes":{},"id":"2dba0081-39a2-4b82-aecc-30c89682e424","type":"ResetTool"},{"attributes":{"callback":null},"id":"a98b3103-4dad-4f4d-854e-827738a008e5","type":"DataRange1d"},{"attributes":{},"id":"6de726aa-ab55-4353-8024-8fbd3c90ac1e","type":"HelpTool"},{"attributes":{},"id":"51b17e8e-1f95-4dfe-a095-0d6d68fad4c0","type":"LinearScale"},{"attributes":{},"id":"5cbd662c-d632-4761-b675-63c22bd78c8f","type":"BasicTickFormatter"},{"attributes":{},"id":"5d0b8b9d-f9e7-426e-b882-3b1a31e4a7b3","type":"LinearScale"},{"attributes":{"plot":{"id":"ab2547c7-33b5-44d7-8de2-f16f5cbb6b09","subtype":"Figure","type":"Plot"},"ticker":{"id":"b5cbc46b-0d19-489e-94b5-7147db202dbc","type":"BasicTicker"}},"id":"ed6f8edc-05aa-4822-be97-7db8b18904e6","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"10320daf-7026-4b06-8073-591a632e3088","type":"Title"},{"attributes":{"formatter":{"id":"5cbd662c-d632-4761-b675-63c22bd78c8f","type":"BasicTickFormatter"},"plot":{"id":"ab2547c7-33b5-44d7-8de2-f16f5cbb6b09","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f2913ad-16ad-4acc-b14a-f24aaf49ec84","type":"BasicTicker"}},"id":"74645976-ed78-4bf8-b76a-2b54c674018f","type":"LinearAxis"}],"root_ids":["ab2547c7-33b5-44d7-8de2-f16f5cbb6b09"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"0e329c4f-1828-4bd0-9c5a-33d98cc5621c","elementid":"45c03ddc-5af1-4d1d-b2b5-c1669a1c9e57","modelid":"ab2547c7-33b5-44d7-8de2-f16f5cbb6b09"}];
                
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.9.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.9.min.css");
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
