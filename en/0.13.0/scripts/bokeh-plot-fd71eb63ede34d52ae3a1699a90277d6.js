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
      };var element = document.getElementById("a50f26c6-89ae-440a-8562-53df324b5a63");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a50f26c6-89ae-440a-8562-53df324b5a63' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"f9f41a7b-18b7-485c-9958-3dcfce44c591":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"da60cd9b-9545-48d5-a009-cf1e298a8392","subtype":"Figure","type":"Plot"},"ticker":{"id":"76ba97bf-efc8-45fd-8415-4e2c322c381e","type":"BasicTicker"}},"id":"6863ac17-806f-40a7-bf6d-d5578981b1be","type":"Grid"},{"attributes":{},"id":"ef2971f7-245d-418f-b4f3-bd8274cb69d9","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"554d0dfb-5682-4373-a333-3043c6cccca8","type":"BoxAnnotation"}},"id":"1596dd6a-286b-443d-832d-9515fa8674e5","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"da60cd9b-9545-48d5-a009-cf1e298a8392","subtype":"Figure","type":"Plot"},"ticker":{"id":"99fdfc07-d2ac-4e6d-bc5a-95e7f27c4591","type":"BasicTicker"}},"id":"252d6240-db3e-40ca-a10a-5a6d24e82486","type":"Grid"},{"attributes":{"source":{"id":"249d50d4-5717-481a-9779-290e66e37264","type":"ColumnDataSource"}},"id":"77315202-c1e9-4257-96fc-b8681fea7684","type":"CDSView"},{"attributes":{},"id":"3db81bfc-6520-4695-a23f-804ed92b3819","type":"HelpTool"},{"attributes":{},"id":"64d087ba-6432-4a7c-baac-e0aa148b3a2e","type":"ResetTool"},{"attributes":{},"id":"4b537e9e-add5-40e5-9833-0947957385d0","type":"UnionRenderers"},{"attributes":{},"id":"6465135a-a77a-4087-8d0a-ccbb6fcb25fa","type":"PanTool"},{"attributes":{"below":[{"id":"8698c7ed-747b-4658-9d4e-e3e7abbd4e4c","type":"LinearAxis"}],"left":[{"id":"990a5ad0-1a96-4e9e-92d1-56915517a9bc","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"8698c7ed-747b-4658-9d4e-e3e7abbd4e4c","type":"LinearAxis"},{"id":"252d6240-db3e-40ca-a10a-5a6d24e82486","type":"Grid"},{"id":"990a5ad0-1a96-4e9e-92d1-56915517a9bc","type":"LinearAxis"},{"id":"6863ac17-806f-40a7-bf6d-d5578981b1be","type":"Grid"},{"id":"554d0dfb-5682-4373-a333-3043c6cccca8","type":"BoxAnnotation"},{"id":"38a2d273-132d-43cb-927d-68e042078b19","type":"GlyphRenderer"}],"title":{"id":"12063de3-acc8-468b-9aa5-75ea83d22d16","type":"Title"},"toolbar":{"id":"8d88f0e2-aa96-417e-882a-db677d5abe69","type":"Toolbar"},"x_range":{"id":"c27831fc-2943-422a-ad33-c4a5316bcf7c","type":"DataRange1d"},"x_scale":{"id":"003342fa-f4b6-4f43-910a-f06324ad3e3c","type":"LinearScale"},"y_range":{"id":"7431b6aa-17ed-40b0-b1c7-61570218d973","type":"DataRange1d"},"y_scale":{"id":"0138bab4-c8de-47f7-bbfa-f1c0abfa4dce","type":"LinearScale"}},"id":"da60cd9b-9545-48d5-a009-cf1e298a8392","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"f71254c0-8987-4880-9c98-a0f87e4088f7","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6465135a-a77a-4087-8d0a-ccbb6fcb25fa","type":"PanTool"},{"id":"144204ad-bf2e-4bf0-a889-0f084c3d9543","type":"WheelZoomTool"},{"id":"1596dd6a-286b-443d-832d-9515fa8674e5","type":"BoxZoomTool"},{"id":"f71254c0-8987-4880-9c98-a0f87e4088f7","type":"SaveTool"},{"id":"64d087ba-6432-4a7c-baac-e0aa148b3a2e","type":"ResetTool"},{"id":"3db81bfc-6520-4695-a23f-804ed92b3819","type":"HelpTool"}]},"id":"8d88f0e2-aa96-417e-882a-db677d5abe69","type":"Toolbar"},{"attributes":{"callback":null},"id":"c27831fc-2943-422a-ad33-c4a5316bcf7c","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"554d0dfb-5682-4373-a333-3043c6cccca8","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"ae2a96c1-983a-4631-a665-85f1bc376f9a","type":"BasicTickFormatter"},"plot":{"id":"da60cd9b-9545-48d5-a009-cf1e298a8392","subtype":"Figure","type":"Plot"},"ticker":{"id":"c3e9266c-380d-4c0f-87d0-e954db0e4f97","type":"FixedTicker"}},"id":"8698c7ed-747b-4658-9d4e-e3e7abbd4e4c","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7ca30e3-6c4b-4850-ac12-119796439a3f","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"12063de3-acc8-468b-9aa5-75ea83d22d16","type":"Title"},{"attributes":{},"id":"003342fa-f4b6-4f43-910a-f06324ad3e3c","type":"LinearScale"},{"attributes":{},"id":"144204ad-bf2e-4bf0-a889-0f084c3d9543","type":"WheelZoomTool"},{"attributes":{},"id":"ae2a96c1-983a-4631-a665-85f1bc376f9a","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"249d50d4-5717-481a-9779-290e66e37264","type":"ColumnDataSource"},"glyph":{"id":"a7ca30e3-6c4b-4850-ac12-119796439a3f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"e2d6c558-bee1-4713-a8d8-65fae7cc62f4","type":"Circle"},"selection_glyph":null,"view":{"id":"77315202-c1e9-4257-96fc-b8681fea7684","type":"CDSView"}},"id":"38a2d273-132d-43cb-927d-68e042078b19","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"7431b6aa-17ed-40b0-b1c7-61570218d973","type":"DataRange1d"},{"attributes":{},"id":"03c000e3-889c-4a53-8759-8d2266fe70da","type":"Selection"},{"attributes":{},"id":"0138bab4-c8de-47f7-bbfa-f1c0abfa4dce","type":"LinearScale"},{"attributes":{},"id":"76ba97bf-efc8-45fd-8415-4e2c322c381e","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"03c000e3-889c-4a53-8759-8d2266fe70da","type":"Selection"},"selection_policy":{"id":"4b537e9e-add5-40e5-9833-0947957385d0","type":"UnionRenderers"}},"id":"249d50d4-5717-481a-9779-290e66e37264","type":"ColumnDataSource"},{"attributes":{},"id":"99fdfc07-d2ac-4e6d-bc5a-95e7f27c4591","type":"BasicTicker"},{"attributes":{"formatter":{"id":"ef2971f7-245d-418f-b4f3-bd8274cb69d9","type":"BasicTickFormatter"},"plot":{"id":"da60cd9b-9545-48d5-a009-cf1e298a8392","subtype":"Figure","type":"Plot"},"ticker":{"id":"76ba97bf-efc8-45fd-8415-4e2c322c381e","type":"BasicTicker"}},"id":"990a5ad0-1a96-4e9e-92d1-56915517a9bc","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"e2d6c558-bee1-4713-a8d8-65fae7cc62f4","type":"Circle"},{"attributes":{"ticks":[2,3.5,4]},"id":"c3e9266c-380d-4c0f-87d0-e954db0e4f97","type":"FixedTicker"}],"root_ids":["da60cd9b-9545-48d5-a009-cf1e298a8392"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"f9f41a7b-18b7-485c-9958-3dcfce44c591","roots":{"da60cd9b-9545-48d5-a009-cf1e298a8392":"a50f26c6-89ae-440a-8562-53df324b5a63"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
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