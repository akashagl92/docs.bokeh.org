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
      };var element = document.getElementById("73581c36-3e52-4077-8fa5-61f9b60a5ccb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '73581c36-3e52-4077-8fa5-61f9b60a5ccb' but no matching script tag was found. ")
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
                var docs_json = {"3d4aa7f0-f763-4654-acc1-20545949badc":{"roots":{"references":[{"attributes":{},"id":"55b2741a-34c3-4551-a354-c11ae77ae3eb","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"f3b7a044-bd0e-4b58-ba3d-c4a304b3d296","type":"ColumnDataSource"}},"id":"6e35c547-dc95-4a1e-8867-7d8d290863fd","type":"CDSView"},{"attributes":{"callback":null,"column_names":["y","right"],"data":{"right":[1,2,3],"y":[1,2,3]}},"id":"f3b7a044-bd0e-4b58-ba3d-c4a304b3d296","type":"ColumnDataSource"},{"attributes":{},"id":"ad0f47be-e44b-4473-a753-2a1f82a90c9a","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"b75f8a84-1198-438b-8873-0d72f7f651c3","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"30de9664-0c33-4b2a-b3f6-89f7be123963","type":"LinearAxis"}],"left":[{"id":"8fcfc9b1-48b5-4de7-b3b1-73635103161a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"30de9664-0c33-4b2a-b3f6-89f7be123963","type":"LinearAxis"},{"id":"85cf2efe-95f9-4bd4-89dc-c8728793222d","type":"Grid"},{"id":"8fcfc9b1-48b5-4de7-b3b1-73635103161a","type":"LinearAxis"},{"id":"227495c1-b0d1-46a6-9f35-4f98a6892c0e","type":"Grid"},{"id":"b75f8a84-1198-438b-8873-0d72f7f651c3","type":"BoxAnnotation"},{"id":"d9d33e7b-c1a5-4814-9ec7-ce8160b2995a","type":"GlyphRenderer"}],"title":{"id":"14c6d48b-229a-44a9-8418-13f1881e9886","type":"Title"},"toolbar":{"id":"4cf17fb3-59f3-4698-8172-8d50124f3893","type":"Toolbar"},"x_range":{"id":"ca2a1ed2-defb-4a2a-83da-5a4ebce26fe4","type":"DataRange1d"},"x_scale":{"id":"742ac1a0-85d3-465e-b74f-2356a5205395","type":"LinearScale"},"y_range":{"id":"e0fd212b-3fa4-41b0-b955-6c267b97bfc5","type":"DataRange1d"},"y_scale":{"id":"07aca716-7893-4064-bd19-488fbbc8993b","type":"LinearScale"}},"id":"3622bcc8-a62b-4137-a98a-632649c88524","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f2cd7800-8b3c-4eee-9493-456c08e58539","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f2cd7800-8b3c-4eee-9493-456c08e58539","type":"PanTool"},{"id":"6f45cb50-b458-42a1-8250-f689a4fd80a4","type":"WheelZoomTool"},{"id":"e903636f-4b8b-48e8-8927-546ec833541a","type":"BoxZoomTool"},{"id":"1313fac4-8d4e-4f19-b0ca-b8867a4b2525","type":"SaveTool"},{"id":"45b382a8-73f5-4fdd-846c-4cc7b4ac53b1","type":"ResetTool"},{"id":"98395461-1e35-45da-a9e7-62b13fddd884","type":"HelpTool"}]},"id":"4cf17fb3-59f3-4698-8172-8d50124f3893","type":"Toolbar"},{"attributes":{"formatter":{"id":"55b2741a-34c3-4551-a354-c11ae77ae3eb","type":"BasicTickFormatter"},"plot":{"id":"3622bcc8-a62b-4137-a98a-632649c88524","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f162e35-18b8-4799-a320-9cc212757378","type":"BasicTicker"}},"id":"30de9664-0c33-4b2a-b3f6-89f7be123963","type":"LinearAxis"},{"attributes":{},"id":"6f45cb50-b458-42a1-8250-f689a4fd80a4","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"ca2a1ed2-defb-4a2a-83da-5a4ebce26fe4","type":"DataRange1d"},{"attributes":{"overlay":{"id":"b75f8a84-1198-438b-8873-0d72f7f651c3","type":"BoxAnnotation"}},"id":"e903636f-4b8b-48e8-8927-546ec833541a","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3622bcc8-a62b-4137-a98a-632649c88524","subtype":"Figure","type":"Plot"},"ticker":{"id":"6f162e35-18b8-4799-a320-9cc212757378","type":"BasicTicker"}},"id":"85cf2efe-95f9-4bd4-89dc-c8728793222d","type":"Grid"},{"attributes":{},"id":"1313fac4-8d4e-4f19-b0ca-b8867a4b2525","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#CAB2D6"},"height":{"value":0.5},"line_color":{"value":"#CAB2D6"},"right":{"field":"right"},"y":{"field":"y"}},"id":"1f191938-54dc-4930-8202-d8b0657b5cd7","type":"HBar"},{"attributes":{},"id":"45b382a8-73f5-4fdd-846c-4cc7b4ac53b1","type":"ResetTool"},{"attributes":{"callback":null},"id":"e0fd212b-3fa4-41b0-b955-6c267b97bfc5","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"value":0.5},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"y":{"field":"y"}},"id":"cd7f2782-b87c-4436-a145-beda4f6b6493","type":"HBar"},{"attributes":{},"id":"98395461-1e35-45da-a9e7-62b13fddd884","type":"HelpTool"},{"attributes":{},"id":"742ac1a0-85d3-465e-b74f-2356a5205395","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"14c6d48b-229a-44a9-8418-13f1881e9886","type":"Title"},{"attributes":{},"id":"07aca716-7893-4064-bd19-488fbbc8993b","type":"LinearScale"},{"attributes":{},"id":"6f162e35-18b8-4799-a320-9cc212757378","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ad0f47be-e44b-4473-a753-2a1f82a90c9a","type":"BasicTickFormatter"},"plot":{"id":"3622bcc8-a62b-4137-a98a-632649c88524","subtype":"Figure","type":"Plot"},"ticker":{"id":"89c1bbea-9341-4547-a4e3-ac5d2a72f308","type":"BasicTicker"}},"id":"8fcfc9b1-48b5-4de7-b3b1-73635103161a","type":"LinearAxis"},{"attributes":{},"id":"89c1bbea-9341-4547-a4e3-ac5d2a72f308","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"3622bcc8-a62b-4137-a98a-632649c88524","subtype":"Figure","type":"Plot"},"ticker":{"id":"89c1bbea-9341-4547-a4e3-ac5d2a72f308","type":"BasicTicker"}},"id":"227495c1-b0d1-46a6-9f35-4f98a6892c0e","type":"Grid"},{"attributes":{"data_source":{"id":"f3b7a044-bd0e-4b58-ba3d-c4a304b3d296","type":"ColumnDataSource"},"glyph":{"id":"1f191938-54dc-4930-8202-d8b0657b5cd7","type":"HBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"cd7f2782-b87c-4436-a145-beda4f6b6493","type":"HBar"},"selection_glyph":null,"view":{"id":"6e35c547-dc95-4a1e-8867-7d8d290863fd","type":"CDSView"}},"id":"d9d33e7b-c1a5-4814-9ec7-ce8160b2995a","type":"GlyphRenderer"}],"root_ids":["3622bcc8-a62b-4137-a98a-632649c88524"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"3d4aa7f0-f763-4654-acc1-20545949badc","elementid":"73581c36-3e52-4077-8fa5-61f9b60a5ccb","modelid":"3622bcc8-a62b-4137-a98a-632649c88524"}];
                
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
