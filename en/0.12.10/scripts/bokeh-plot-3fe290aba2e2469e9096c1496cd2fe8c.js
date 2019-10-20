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
      };var element = document.getElementById("140deee7-ab8f-44ea-9145-6254114ceb6c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '140deee7-ab8f-44ea-9145-6254114ceb6c' but no matching script tag was found. ")
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
                    var docs_json = {"c9235b88-b493-4c64-9d18-ee4ff3b047f8":{"roots":{"references":[{"attributes":{"below":[{"id":"85f36a59-9bb8-41eb-be4f-56d55e5fa61b","type":"LinearAxis"}],"left":[{"id":"4bba971d-d33b-4c57-8e05-515249c2362c","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"85f36a59-9bb8-41eb-be4f-56d55e5fa61b","type":"LinearAxis"},{"id":"062f3913-9712-423f-8525-afe4186c45e5","type":"Grid"},{"id":"4bba971d-d33b-4c57-8e05-515249c2362c","type":"LinearAxis"},{"id":"7376f9b7-6652-426d-abc4-780d71012cce","type":"Grid"},{"id":"cb9c9c99-bd94-4382-b228-5d4430daf8a9","type":"BoxAnnotation"},{"id":"bb407515-d8e1-40b5-a9fa-75894be55672","type":"GlyphRenderer"}],"title":{"id":"87fcbe28-427f-4202-bbd9-369ff849d51a","type":"Title"},"toolbar":{"id":"babad9c4-28a9-4a39-a17c-241e3bc891e4","type":"Toolbar"},"x_range":{"id":"def4e529-e465-4e5a-ab04-1c0347600370","type":"DataRange1d"},"x_scale":{"id":"1d05e9ed-e302-47be-8f95-188cd62f1ec6","type":"LinearScale"},"y_range":{"id":"c01dd46b-c4d8-4a85-900c-6fbd0039c068","type":"DataRange1d"},"y_scale":{"id":"e2dcc138-ba36-454d-a6ae-65f4f6f4494e","type":"LinearScale"}},"id":"84238810-3203-4624-9877-48705476795e","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"99de138f-c4a2-4c3f-87b8-c3e8b465d05b","type":"NumeralTickFormatter"},"plot":{"id":"84238810-3203-4624-9877-48705476795e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b902e36-4cf8-47a8-835e-91ae7b562f7d","type":"BasicTicker"}},"id":"85f36a59-9bb8-41eb-be4f-56d55e5fa61b","type":"LinearAxis"},{"attributes":{},"id":"d0978cc8-17e5-4fd5-894f-d23fbc046331","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"84238810-3203-4624-9877-48705476795e","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0978cc8-17e5-4fd5-894f-d23fbc046331","type":"BasicTicker"}},"id":"7376f9b7-6652-426d-abc4-780d71012cce","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ef6aad6f-2a52-47d4-a4ad-c33df1baed46","type":"PanTool"},{"id":"e47be554-14f7-4202-bf06-46af87f686c8","type":"WheelZoomTool"},{"id":"bd9f1385-5bbd-4ab7-9f72-82165e1616e9","type":"BoxZoomTool"},{"id":"1369e062-ba04-4728-9428-ba094d489707","type":"SaveTool"},{"id":"6a1b6469-779c-429e-b080-17f952e68b0a","type":"ResetTool"},{"id":"5879cfae-6c56-4b40-ae1f-8a96b4b7b234","type":"HelpTool"}]},"id":"babad9c4-28a9-4a39-a17c-241e3bc891e4","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f6f6f6f3-2c5e-4777-9d77-006d6014bc4f","type":"Circle"},{"attributes":{},"id":"e2dcc138-ba36-454d-a6ae-65f4f6f4494e","type":"LinearScale"},{"attributes":{},"id":"1d05e9ed-e302-47be-8f95-188cd62f1ec6","type":"LinearScale"},{"attributes":{},"id":"ef6aad6f-2a52-47d4-a4ad-c33df1baed46","type":"PanTool"},{"attributes":{},"id":"e47be554-14f7-4202-bf06-46af87f686c8","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"84238810-3203-4624-9877-48705476795e","subtype":"Figure","type":"Plot"},"ticker":{"id":"5b902e36-4cf8-47a8-835e-91ae7b562f7d","type":"BasicTicker"}},"id":"062f3913-9712-423f-8525-afe4186c45e5","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cb9c9c99-bd94-4382-b228-5d4430daf8a9","type":"BoxAnnotation"},{"attributes":{},"id":"5879cfae-6c56-4b40-ae1f-8a96b4b7b234","type":"HelpTool"},{"attributes":{},"id":"1369e062-ba04-4728-9428-ba094d489707","type":"SaveTool"},{"attributes":{"overlay":{"id":"cb9c9c99-bd94-4382-b228-5d4430daf8a9","type":"BoxAnnotation"}},"id":"bd9f1385-5bbd-4ab7-9f72-82165e1616e9","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"faa6f2df-acb7-479c-8d52-3bb7e03c28c5","type":"ColumnDataSource"},"glyph":{"id":"3b46dcec-aa80-402f-bd39-ffd375f98a9f","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f6f6f6f3-2c5e-4777-9d77-006d6014bc4f","type":"Circle"},"selection_glyph":null,"view":{"id":"882b9cf0-fb1e-4401-b02a-2d9bc7881319","type":"CDSView"}},"id":"bb407515-d8e1-40b5-a9fa-75894be55672","type":"GlyphRenderer"},{"attributes":{"source":{"id":"faa6f2df-acb7-479c-8d52-3bb7e03c28c5","type":"ColumnDataSource"}},"id":"882b9cf0-fb1e-4401-b02a-2d9bc7881319","type":"CDSView"},{"attributes":{},"id":"5b902e36-4cf8-47a8-835e-91ae7b562f7d","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"87fcbe28-427f-4202-bbd9-369ff849d51a","type":"Title"},{"attributes":{"callback":null},"id":"def4e529-e465-4e5a-ab04-1c0347600370","type":"DataRange1d"},{"attributes":{"format":"0.0%"},"id":"99de138f-c4a2-4c3f-87b8-c3e8b465d05b","type":"NumeralTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3b46dcec-aa80-402f-bd39-ffd375f98a9f","type":"Circle"},{"attributes":{"callback":null},"id":"c01dd46b-c4d8-4a85-900c-6fbd0039c068","type":"DataRange1d"},{"attributes":{"formatter":{"id":"191dea65-040f-453b-8038-f2872238c6b1","type":"NumeralTickFormatter"},"plot":{"id":"84238810-3203-4624-9877-48705476795e","subtype":"Figure","type":"Plot"},"ticker":{"id":"d0978cc8-17e5-4fd5-894f-d23fbc046331","type":"BasicTicker"}},"id":"4bba971d-d33b-4c57-8e05-515249c2362c","type":"LinearAxis"},{"attributes":{},"id":"6a1b6469-779c-429e-b080-17f952e68b0a","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"faa6f2df-acb7-479c-8d52-3bb7e03c28c5","type":"ColumnDataSource"},{"attributes":{"format":"$0.00"},"id":"191dea65-040f-453b-8038-f2872238c6b1","type":"NumeralTickFormatter"}],"root_ids":["84238810-3203-4624-9877-48705476795e"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"c9235b88-b493-4c64-9d18-ee4ff3b047f8","elementid":"140deee7-ab8f-44ea-9145-6254114ceb6c","modelid":"84238810-3203-4624-9877-48705476795e"}];
                
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
