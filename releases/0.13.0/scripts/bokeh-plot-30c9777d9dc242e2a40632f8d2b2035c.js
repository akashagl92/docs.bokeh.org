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
      };var element = document.getElementById("cbe6e8c1-1e2f-4862-a956-cc5f46738aa1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cbe6e8c1-1e2f-4862-a956-cc5f46738aa1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d28a569f-5416-4fde-9466-cde1a5e2356d":{"roots":{"references":[{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c2b5692c-3e31-4523-abcc-a39475b32fca","type":"Circle"},{"attributes":{"source":{"id":"64a9449f-b861-4d4a-b583-ec74a5efc2ea","type":"ColumnDataSource"}},"id":"d4927645-a94e-440c-b558-558d9f096922","type":"CDSView"},{"attributes":{"data_source":{"id":"64a9449f-b861-4d4a-b583-ec74a5efc2ea","type":"ColumnDataSource"},"glyph":{"id":"c2b5692c-3e31-4523-abcc-a39475b32fca","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"da2eb858-bc39-4427-85b4-50b617736a7e","type":"Circle"},"selection_glyph":null,"view":{"id":"d4927645-a94e-440c-b558-558d9f096922","type":"CDSView"}},"id":"492e2f48-3c0d-417e-9d47-7231855d2104","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"a199e863-86ab-418c-b219-c60042b4aad1","type":"LinearAxis"}],"left":[{"id":"e11cc54d-18ca-4685-a90b-0913556369bc","type":"LinearAxis"}],"plot_height":300,"plot_width":700,"renderers":[{"id":"a199e863-86ab-418c-b219-c60042b4aad1","type":"LinearAxis"},{"id":"90210d0c-a7ee-4c81-b3ae-d2921b489624","type":"Grid"},{"id":"e11cc54d-18ca-4685-a90b-0913556369bc","type":"LinearAxis"},{"id":"f7caaa98-5458-477e-a084-c17474de2262","type":"Grid"},{"id":"330d79a0-42d2-4719-aa0d-cf348df70ab0","type":"BoxAnnotation"},{"id":"492e2f48-3c0d-417e-9d47-7231855d2104","type":"GlyphRenderer"}],"title":{"id":"4444eb10-cc64-4666-a2e2-af39640102b8","type":"Title"},"toolbar":{"id":"76c847bb-48b6-45d8-a906-9cd9cd05d8c1","type":"Toolbar"},"x_range":{"id":"7201909d-2878-4489-b22f-d2ef2de13a18","type":"DataRange1d"},"x_scale":{"id":"1b856379-f991-4971-a74e-630e5d5c575a","type":"LinearScale"},"y_range":{"id":"b969eb07-fd75-4857-adcc-d9c1f3d2a430","type":"DataRange1d"},"y_scale":{"id":"dd3f9798-1f63-4f73-8a78-3b0c103c4dc0","type":"LinearScale"}},"id":"a385cd1a-3c00-4a47-a384-fb5ef5e846d3","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"668e3c05-d883-480d-9091-5fce5a64db5f","type":"PanTool"},{"id":"f353d792-04ee-4c63-85c8-4a38b6b07363","type":"WheelZoomTool"},{"id":"6d6506e0-cca5-49c1-8bf2-05775b7f1229","type":"BoxZoomTool"},{"id":"b56f94ce-e57b-4c19-a07c-936e39153f3a","type":"SaveTool"},{"id":"628f0348-7cf0-4b04-a062-1cc101f82602","type":"ResetTool"},{"id":"132b5b72-0652-4cbb-8eea-b060feec16e4","type":"HelpTool"}]},"id":"76c847bb-48b6-45d8-a906-9cd9cd05d8c1","type":"Toolbar"},{"attributes":{"callback":null},"id":"7201909d-2878-4489-b22f-d2ef2de13a18","type":"DataRange1d"},{"attributes":{"callback":null},"id":"b969eb07-fd75-4857-adcc-d9c1f3d2a430","type":"DataRange1d"},{"attributes":{},"id":"628f0348-7cf0-4b04-a062-1cc101f82602","type":"ResetTool"},{"attributes":{},"id":"dd3f9798-1f63-4f73-8a78-3b0c103c4dc0","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"330d79a0-42d2-4719-aa0d-cf348df70ab0","type":"BoxAnnotation"},{"attributes":{},"id":"1cd93606-8c33-46a9-803a-3aa8415e70dd","type":"BasicTickFormatter"},{"attributes":{},"id":"668e3c05-d883-480d-9091-5fce5a64db5f","type":"PanTool"},{"attributes":{},"id":"cfbc069a-18ec-4512-9bbf-c9ed2b6ca91a","type":"BasicTicker"},{"attributes":{"plot":{"id":"a385cd1a-3c00-4a47-a384-fb5ef5e846d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c6870aa-c707-4250-8c04-b96fcb2849d9","type":"BasicTicker"}},"id":"90210d0c-a7ee-4c81-b3ae-d2921b489624","type":"Grid"},{"attributes":{},"id":"997ab654-751c-49d3-bc99-af0871d3e912","type":"UnionRenderers"},{"attributes":{},"id":"b56f94ce-e57b-4c19-a07c-936e39153f3a","type":"SaveTool"},{"attributes":{"formatter":{"id":"1cd93606-8c33-46a9-803a-3aa8415e70dd","type":"BasicTickFormatter"},"plot":{"id":"a385cd1a-3c00-4a47-a384-fb5ef5e846d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfbc069a-18ec-4512-9bbf-c9ed2b6ca91a","type":"BasicTicker"}},"id":"e11cc54d-18ca-4685-a90b-0913556369bc","type":"LinearAxis"},{"attributes":{},"id":"7cedb238-55d5-47db-97f7-78a53c9c2cd3","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"7cedb238-55d5-47db-97f7-78a53c9c2cd3","type":"BasicTickFormatter"},"plot":{"id":"a385cd1a-3c00-4a47-a384-fb5ef5e846d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"6c6870aa-c707-4250-8c04-b96fcb2849d9","type":"BasicTicker"}},"id":"a199e863-86ab-418c-b219-c60042b4aad1","type":"LinearAxis"},{"attributes":{"overlay":{"id":"330d79a0-42d2-4719-aa0d-cf348df70ab0","type":"BoxAnnotation"}},"id":"6d6506e0-cca5-49c1-8bf2-05775b7f1229","type":"BoxZoomTool"},{"attributes":{},"id":"6c6870aa-c707-4250-8c04-b96fcb2849d9","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"a385cd1a-3c00-4a47-a384-fb5ef5e846d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"cfbc069a-18ec-4512-9bbf-c9ed2b6ca91a","type":"BasicTicker"}},"id":"f7caaa98-5458-477e-a084-c17474de2262","type":"Grid"},{"attributes":{},"id":"f353d792-04ee-4c63-85c8-4a38b6b07363","type":"WheelZoomTool"},{"attributes":{"plot":null,"text":""},"id":"4444eb10-cc64-4666-a2e2-af39640102b8","type":"Title"},{"attributes":{},"id":"132b5b72-0652-4cbb-8eea-b060feec16e4","type":"HelpTool"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"84265a62-adf7-4e58-bb78-59e6bf8163f0","type":"Selection"},"selection_policy":{"id":"997ab654-751c-49d3-bc99-af0871d3e912","type":"UnionRenderers"}},"id":"64a9449f-b861-4d4a-b583-ec74a5efc2ea","type":"ColumnDataSource"},{"attributes":{},"id":"1b856379-f991-4971-a74e-630e5d5c575a","type":"LinearScale"},{"attributes":{},"id":"84265a62-adf7-4e58-bb78-59e6bf8163f0","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"da2eb858-bc39-4427-85b4-50b617736a7e","type":"Circle"}],"root_ids":["a385cd1a-3c00-4a47-a384-fb5ef5e846d3"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d28a569f-5416-4fde-9466-cde1a5e2356d","roots":{"a385cd1a-3c00-4a47-a384-fb5ef5e846d3":"cbe6e8c1-1e2f-4862-a956-cc5f46738aa1"}}];
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