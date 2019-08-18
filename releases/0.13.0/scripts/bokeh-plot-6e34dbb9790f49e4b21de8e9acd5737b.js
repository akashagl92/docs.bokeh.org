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
      };var element = document.getElementById("ea036f17-b990-4a93-9498-88a1dc837897");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ea036f17-b990-4a93-9498-88a1dc837897' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"dce42b55-22fb-4324-8e6c-d871faf73bcf":{"roots":{"references":[{"attributes":{},"id":"287850ba-07a2-414d-b565-694e0804ea3d","type":"LinearScale"},{"attributes":{},"id":"31dfbb30-6792-4431-87b1-8da97b6c3220","type":"BasicTickFormatter"},{"attributes":{},"id":"647a13cb-add1-4d98-a867-1210d171862b","type":"LinearScale"},{"attributes":{"code":"\\n    return Math.floor(tick) + \\" + \\" + (tick % 1).toFixed(2)\\n"},"id":"094e5536-e21c-487f-a709-22dbe0678db9","type":"FuncTickFormatter"},{"attributes":{"formatter":{"id":"31dfbb30-6792-4431-87b1-8da97b6c3220","type":"BasicTickFormatter"},"plot":{"id":"823bcc75-9ee0-4b6e-a992-094ac346862b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a877ac5e-1e07-4919-b8ac-db4ad0c750f3","type":"BasicTicker"}},"id":"4e87f3b6-a206-45f1-bbad-e03ef4211f38","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"36e949a8-476a-44ea-9ba7-29fd09fc9a79","type":"Title"},{"attributes":{"plot":{"id":"823bcc75-9ee0-4b6e-a992-094ac346862b","subtype":"Figure","type":"Plot"},"ticker":{"id":"a877ac5e-1e07-4919-b8ac-db4ad0c750f3","type":"BasicTicker"}},"id":"f8f9d195-da3e-42e3-9919-29ab4b8ef392","type":"Grid"},{"attributes":{},"id":"a877ac5e-1e07-4919-b8ac-db4ad0c750f3","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"2ff3ea8f-c50b-4dca-8714-726aec9672f1","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"094e5536-e21c-487f-a709-22dbe0678db9","type":"FuncTickFormatter"},"plot":{"id":"823bcc75-9ee0-4b6e-a992-094ac346862b","subtype":"Figure","type":"Plot"},"ticker":{"id":"447029c2-e186-46f5-bcb1-4d8e3d70a55e","type":"BasicTicker"}},"id":"e997ece2-80f4-48fe-ac32-e003f9ac60f9","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[0,2,4,6,8,10],"y":[6,2,4,10,8,0]},"selected":{"id":"763827c5-d0eb-4805-b046-2ba1c5b9ccbe","type":"Selection"},"selection_policy":{"id":"a208dc96-674a-4994-956d-f5beeff6eb40","type":"UnionRenderers"}},"id":"9daeb79c-f71d-4ced-9f10-7c39f94b6333","type":"ColumnDataSource"},{"attributes":{},"id":"447029c2-e186-46f5-bcb1-4d8e3d70a55e","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"823bcc75-9ee0-4b6e-a992-094ac346862b","subtype":"Figure","type":"Plot"},"ticker":{"id":"447029c2-e186-46f5-bcb1-4d8e3d70a55e","type":"BasicTicker"}},"id":"17858f82-7dc5-4b7d-a92e-73979ec749b8","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"3edde636-a8c6-47a5-8e28-e759314c526f","type":"Circle"},{"attributes":{},"id":"82ca15f5-6e05-4816-b5a4-a3a9e9ef4897","type":"WheelZoomTool"},{"attributes":{},"id":"468fe86d-9d45-483a-93ff-0b1fe012ddd4","type":"PanTool"},{"attributes":{"data_source":{"id":"9daeb79c-f71d-4ced-9f10-7c39f94b6333","type":"ColumnDataSource"},"glyph":{"id":"61d5fafe-fd37-4f5d-83ea-8a29281f96bc","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3edde636-a8c6-47a5-8e28-e759314c526f","type":"Circle"},"selection_glyph":null,"view":{"id":"b78d487d-1e58-4fd8-821b-0b309e9d569c","type":"CDSView"}},"id":"5d11621f-be90-4253-804c-effb1560c428","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"2ff3ea8f-c50b-4dca-8714-726aec9672f1","type":"BoxAnnotation"}},"id":"ef73aebc-6aac-4eec-9892-18cbd8a9c34e","type":"BoxZoomTool"},{"attributes":{"source":{"id":"9daeb79c-f71d-4ced-9f10-7c39f94b6333","type":"ColumnDataSource"}},"id":"b78d487d-1e58-4fd8-821b-0b309e9d569c","type":"CDSView"},{"attributes":{"below":[{"id":"4e87f3b6-a206-45f1-bbad-e03ef4211f38","type":"LinearAxis"}],"left":[{"id":"e997ece2-80f4-48fe-ac32-e003f9ac60f9","type":"LinearAxis"}],"plot_height":500,"plot_width":500,"renderers":[{"id":"4e87f3b6-a206-45f1-bbad-e03ef4211f38","type":"LinearAxis"},{"id":"f8f9d195-da3e-42e3-9919-29ab4b8ef392","type":"Grid"},{"id":"e997ece2-80f4-48fe-ac32-e003f9ac60f9","type":"LinearAxis"},{"id":"17858f82-7dc5-4b7d-a92e-73979ec749b8","type":"Grid"},{"id":"2ff3ea8f-c50b-4dca-8714-726aec9672f1","type":"BoxAnnotation"},{"id":"5d11621f-be90-4253-804c-effb1560c428","type":"GlyphRenderer"}],"title":{"id":"36e949a8-476a-44ea-9ba7-29fd09fc9a79","type":"Title"},"toolbar":{"id":"52080cd2-53c5-48b1-bc07-eb84ae39d0be","type":"Toolbar"},"x_range":{"id":"428d3527-9d63-45e2-ab0e-4a7409a4cef5","type":"DataRange1d"},"x_scale":{"id":"287850ba-07a2-414d-b565-694e0804ea3d","type":"LinearScale"},"y_range":{"id":"17f8e579-2d38-497e-84b0-b1a79c60ac77","type":"DataRange1d"},"y_scale":{"id":"647a13cb-add1-4d98-a867-1210d171862b","type":"LinearScale"}},"id":"823bcc75-9ee0-4b6e-a992-094ac346862b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a208dc96-674a-4994-956d-f5beeff6eb40","type":"UnionRenderers"},{"attributes":{},"id":"763827c5-d0eb-4805-b046-2ba1c5b9ccbe","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"468fe86d-9d45-483a-93ff-0b1fe012ddd4","type":"PanTool"},{"id":"82ca15f5-6e05-4816-b5a4-a3a9e9ef4897","type":"WheelZoomTool"},{"id":"ef73aebc-6aac-4eec-9892-18cbd8a9c34e","type":"BoxZoomTool"},{"id":"fff9462d-273e-43cd-94a7-5d6b61dd394e","type":"SaveTool"},{"id":"9fcedf2a-7e7a-4da6-93fd-10a58615d3a8","type":"ResetTool"},{"id":"492a6880-b0e3-43a6-8c18-76884b46e3f5","type":"HelpTool"}]},"id":"52080cd2-53c5-48b1-bc07-eb84ae39d0be","type":"Toolbar"},{"attributes":{"callback":null},"id":"428d3527-9d63-45e2-ab0e-4a7409a4cef5","type":"DataRange1d"},{"attributes":{},"id":"fff9462d-273e-43cd-94a7-5d6b61dd394e","type":"SaveTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"61d5fafe-fd37-4f5d-83ea-8a29281f96bc","type":"Circle"},{"attributes":{},"id":"9fcedf2a-7e7a-4da6-93fd-10a58615d3a8","type":"ResetTool"},{"attributes":{"callback":null},"id":"17f8e579-2d38-497e-84b0-b1a79c60ac77","type":"DataRange1d"},{"attributes":{},"id":"492a6880-b0e3-43a6-8c18-76884b46e3f5","type":"HelpTool"}],"root_ids":["823bcc75-9ee0-4b6e-a992-094ac346862b"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"dce42b55-22fb-4324-8e6c-d871faf73bcf","roots":{"823bcc75-9ee0-4b6e-a992-094ac346862b":"ea036f17-b990-4a93-9498-88a1dc837897"}}];
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