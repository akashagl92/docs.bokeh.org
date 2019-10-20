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
      };var element = document.getElementById("06029dad-392a-448e-899c-908e930ff192");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '06029dad-392a-448e-899c-908e930ff192' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"69df9835-302f-4a8b-a320-3a7ce711804c":{"roots":{"references":[{"attributes":{"callback":null},"id":"efb2c8d6-8b3f-4de8-8e9a-e66f70a98b9b","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"7cfb6bc6-62bf-49c1-895d-a664fab079cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d16e5390-baab-47e9-83e7-1b31639342b1","type":"BasicTicker"}},"id":"9c308432-9c0c-4bd4-93f5-b824f9a7700b","type":"Grid"},{"attributes":{},"id":"b6ca996b-dc32-4950-96d2-1083e4d81032","type":"LinearScale"},{"attributes":{"plot":{"id":"7cfb6bc6-62bf-49c1-895d-a664fab079cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6d4966f-6373-4b23-88ae-92a8fe03ffa9","type":"BasicTicker"}},"id":"5200bbca-2e03-477d-93f7-24870e41971e","type":"Grid"},{"attributes":{"formatter":{"id":"09770b07-5f42-4811-beef-800896d5c041","type":"BasicTickFormatter"},"plot":{"id":"7cfb6bc6-62bf-49c1-895d-a664fab079cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"a6d4966f-6373-4b23-88ae-92a8fe03ffa9","type":"BasicTicker"}},"id":"0dcbc584-dc89-4f21-8e96-a8dd33a10f72","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"7f041d97-376e-4d84-a39d-d072faca9c63","type":"BoxAnnotation"},{"attributes":{},"id":"a6d4966f-6373-4b23-88ae-92a8fe03ffa9","type":"BasicTicker"},{"attributes":{},"id":"16eb59a7-4b8c-494e-b5c8-df16920aa2a4","type":"ResetTool"},{"attributes":{"formatter":{"id":"2a8361be-f48c-4fdb-9904-84e8bd9c9e65","type":"BasicTickFormatter"},"plot":{"id":"7cfb6bc6-62bf-49c1-895d-a664fab079cf","subtype":"Figure","type":"Plot"},"ticker":{"id":"d16e5390-baab-47e9-83e7-1b31639342b1","type":"BasicTicker"}},"id":"aa07162d-5235-443e-b3d9-4849d47ca767","type":"LinearAxis"},{"attributes":{},"id":"2a8361be-f48c-4fdb-9904-84e8bd9c9e65","type":"BasicTickFormatter"},{"attributes":{},"id":"d16e5390-baab-47e9-83e7-1b31639342b1","type":"BasicTicker"},{"attributes":{},"id":"210f896f-33e7-4c2e-a211-594ab8509bb3","type":"PanTool"},{"attributes":{"source":{"id":"78493e8b-2e1d-4b77-b073-c0235ee5fe88","type":"ColumnDataSource"}},"id":"028f4027-63e8-463a-8e1f-20e1518a38ec","type":"CDSView"},{"attributes":{"data_source":{"id":"78493e8b-2e1d-4b77-b073-c0235ee5fe88","type":"ColumnDataSource"},"glyph":{"id":"bf81e27c-9546-42f8-a57f-c71c5b4fe762","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f09b2ce6-f9fd-4f2f-b921-7bc6e6ebcae4","type":"Circle"},"selection_glyph":null,"view":{"id":"028f4027-63e8-463a-8e1f-20e1518a38ec","type":"CDSView"}},"id":"de5dd9b7-069a-460a-bb80-0b6f412843be","type":"GlyphRenderer"},{"attributes":{},"id":"2c35b46b-2d84-4ec8-bb1a-cf3823439d8c","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"0dcbc584-dc89-4f21-8e96-a8dd33a10f72","type":"LinearAxis"}],"left":[{"id":"aa07162d-5235-443e-b3d9-4849d47ca767","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"0dcbc584-dc89-4f21-8e96-a8dd33a10f72","type":"LinearAxis"},{"id":"5200bbca-2e03-477d-93f7-24870e41971e","type":"Grid"},{"id":"aa07162d-5235-443e-b3d9-4849d47ca767","type":"LinearAxis"},{"id":"9c308432-9c0c-4bd4-93f5-b824f9a7700b","type":"Grid"},{"id":"7f041d97-376e-4d84-a39d-d072faca9c63","type":"BoxAnnotation"},{"id":"de5dd9b7-069a-460a-bb80-0b6f412843be","type":"GlyphRenderer"}],"title":{"id":"2dbdcfef-deb1-4e2e-8dc2-6ab461cca11f","type":"Title"},"toolbar":{"id":"6ee0ee9d-4508-4ed2-be3a-148e84c964c1","type":"Toolbar"},"x_range":{"id":"cbe2ffc3-fd63-412a-a5e9-47109b32bbec","type":"DataRange1d"},"x_scale":{"id":"9033a99e-99c8-4568-83d2-da830db41fab","type":"LinearScale"},"y_range":{"id":"efb2c8d6-8b3f-4de8-8e9a-e66f70a98b9b","type":"DataRange1d"},"y_scale":{"id":"b6ca996b-dc32-4950-96d2-1083e4d81032","type":"LinearScale"}},"id":"7cfb6bc6-62bf-49c1-895d-a664fab079cf","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"78493e8b-2e1d-4b77-b073-c0235ee5fe88","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Some Title","text_color":{"value":"olive"},"text_font":"times","text_font_style":"italic"},"id":"2dbdcfef-deb1-4e2e-8dc2-6ab461cca11f","type":"Title"},{"attributes":{"overlay":{"id":"7f041d97-376e-4d84-a39d-d072faca9c63","type":"BoxAnnotation"}},"id":"f66463fa-f1e6-43ca-9d79-aa9e0a7f5c8c","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"cbe2ffc3-fd63-412a-a5e9-47109b32bbec","type":"DataRange1d"},{"attributes":{},"id":"71d6f8e7-1cd1-49ae-8763-b1062b2e980c","type":"HelpTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"bf81e27c-9546-42f8-a57f-c71c5b4fe762","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"210f896f-33e7-4c2e-a211-594ab8509bb3","type":"PanTool"},{"id":"2c35b46b-2d84-4ec8-bb1a-cf3823439d8c","type":"WheelZoomTool"},{"id":"f66463fa-f1e6-43ca-9d79-aa9e0a7f5c8c","type":"BoxZoomTool"},{"id":"92ec2332-53f2-4b9e-9e09-7d92d72d2687","type":"SaveTool"},{"id":"16eb59a7-4b8c-494e-b5c8-df16920aa2a4","type":"ResetTool"},{"id":"71d6f8e7-1cd1-49ae-8763-b1062b2e980c","type":"HelpTool"}]},"id":"6ee0ee9d-4508-4ed2-be3a-148e84c964c1","type":"Toolbar"},{"attributes":{},"id":"09770b07-5f42-4811-beef-800896d5c041","type":"BasicTickFormatter"},{"attributes":{},"id":"9033a99e-99c8-4568-83d2-da830db41fab","type":"LinearScale"},{"attributes":{},"id":"92ec2332-53f2-4b9e-9e09-7d92d72d2687","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f09b2ce6-f9fd-4f2f-b921-7bc6e6ebcae4","type":"Circle"}],"root_ids":["7cfb6bc6-62bf-49c1-895d-a664fab079cf"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"69df9835-302f-4a8b-a320-3a7ce711804c","elementid":"06029dad-392a-448e-899c-908e930ff192","modelid":"7cfb6bc6-62bf-49c1-895d-a664fab079cf"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
