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
      };var element = document.getElementById("007ac4d3-27c1-41a6-a8b6-23d059e9d0c0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '007ac4d3-27c1-41a6-a8b6-23d059e9d0c0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"ca49b15e-caf4-4a5c-b5fe-865f92165e57":{"roots":{"references":[{"attributes":{"formatter":{"id":"8ca17603-96ba-4e19-bb37-95b0f3364e08","type":"BasicTickFormatter"},"plot":{"id":"cde48525-2b48-4da3-aff5-8e4504fddc98","subtype":"Figure","type":"Plot"},"ticker":{"id":"a97e2187-4ca7-42b6-9270-238989017cfd","type":"BasicTicker"}},"id":"62eac8ec-e458-4567-8179-9098e28997e6","type":"LinearAxis"},{"attributes":{"data_source":{"id":"3ad4d110-690c-48eb-9aed-fc9669d4d229","type":"ColumnDataSource"},"glyph":{"id":"ab1816bb-23b5-40f9-85ff-f29f080dc4b6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5401727b-d9ab-4775-93e6-c988d5bade77","type":"Circle"},"selection_glyph":null,"view":{"id":"1d48f9c8-0479-4c86-a46c-0b2b0e9f4bec","type":"CDSView"}},"id":"e3a324fe-647a-4373-b3c2-b151bed2ec71","type":"GlyphRenderer"},{"attributes":{},"id":"04a20825-5f0c-43f4-bb1d-0fe5c857d909","type":"SaveTool"},{"attributes":{},"id":"171a8e0f-9c54-4f77-82ee-83610e2aaae2","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"5401727b-d9ab-4775-93e6-c988d5bade77","type":"Circle"},{"attributes":{},"id":"384031ef-288f-40f7-a5c2-f6763c774f56","type":"WheelZoomTool"},{"attributes":{},"id":"7595794c-a3f1-439c-9704-7e42cacd6226","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"7595794c-a3f1-439c-9704-7e42cacd6226","type":"Selection"},"selection_policy":{"id":"6b9c26a2-87f1-424c-8a8e-1845b08150b4","type":"UnionRenderers"}},"id":"3ad4d110-690c-48eb-9aed-fc9669d4d229","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"d85687e7-7926-4ea4-841e-085020a565f6","type":"DataRange1d"},{"attributes":{"callback":null},"id":"6a3b7834-65af-49f4-b911-24b369c24f7f","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab1816bb-23b5-40f9-85ff-f29f080dc4b6","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"2ebbf28a-7bc3-4b9a-baa7-61c21b9f1440","type":"Title"},{"attributes":{},"id":"a97e2187-4ca7-42b6-9270-238989017cfd","type":"BasicTicker"},{"attributes":{},"id":"cded03dd-cdf0-476f-b1f1-18145644dc56","type":"ResetTool"},{"attributes":{},"id":"b21b3c54-7486-493f-877f-c538cbaf8ff9","type":"LinearScale"},{"attributes":{},"id":"8ca17603-96ba-4e19-bb37-95b0f3364e08","type":"BasicTickFormatter"},{"attributes":{},"id":"57d9a3ec-8cdb-4202-9f95-ece4c033090c","type":"LinearScale"},{"attributes":{"plot":{"id":"cde48525-2b48-4da3-aff5-8e4504fddc98","subtype":"Figure","type":"Plot"},"ticker":{"id":"c435f5f8-577e-419a-b22f-1486f5d1c836","type":"BasicTicker"}},"id":"4a2a2955-5bfd-42cd-9cc2-e837d0feb65e","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c036b18b-1ebe-432c-9bf6-0f19f6b2f6ef","type":"BoxAnnotation"},{"attributes":{},"id":"8b5f7262-8268-4321-85dc-e5171e2c4645","type":"PanTool"},{"attributes":{},"id":"c435f5f8-577e-419a-b22f-1486f5d1c836","type":"BasicTicker"},{"attributes":{"below":[{"id":"5d730ed4-8c54-4008-9ce0-da5bbec8c42b","type":"LinearAxis"}],"left":[{"id":"62eac8ec-e458-4567-8179-9098e28997e6","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"5d730ed4-8c54-4008-9ce0-da5bbec8c42b","type":"LinearAxis"},{"id":"4a2a2955-5bfd-42cd-9cc2-e837d0feb65e","type":"Grid"},{"id":"62eac8ec-e458-4567-8179-9098e28997e6","type":"LinearAxis"},{"id":"ff58862e-8b5b-423c-b2b5-fa676b180004","type":"Grid"},{"id":"c036b18b-1ebe-432c-9bf6-0f19f6b2f6ef","type":"BoxAnnotation"},{"id":"e3a324fe-647a-4373-b3c2-b151bed2ec71","type":"GlyphRenderer"}],"title":{"id":"2ebbf28a-7bc3-4b9a-baa7-61c21b9f1440","type":"Title"},"toolbar":{"id":"b8e03082-ef32-4376-ad8a-7f2374025188","type":"Toolbar"},"x_range":{"id":"d85687e7-7926-4ea4-841e-085020a565f6","type":"DataRange1d"},"x_scale":{"id":"b21b3c54-7486-493f-877f-c538cbaf8ff9","type":"LinearScale"},"y_range":{"id":"6a3b7834-65af-49f4-b911-24b369c24f7f","type":"DataRange1d"},"y_scale":{"id":"57d9a3ec-8cdb-4202-9f95-ece4c033090c","type":"LinearScale"}},"id":"cde48525-2b48-4da3-aff5-8e4504fddc98","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"cde48525-2b48-4da3-aff5-8e4504fddc98","subtype":"Figure","type":"Plot"},"ticker":{"id":"a97e2187-4ca7-42b6-9270-238989017cfd","type":"BasicTicker"}},"id":"ff58862e-8b5b-423c-b2b5-fa676b180004","type":"Grid"},{"attributes":{},"id":"ed5e6b44-43f1-498a-939d-27b439735942","type":"HelpTool"},{"attributes":{"formatter":{"id":"171a8e0f-9c54-4f77-82ee-83610e2aaae2","type":"BasicTickFormatter"},"plot":{"id":"cde48525-2b48-4da3-aff5-8e4504fddc98","subtype":"Figure","type":"Plot"},"ticker":{"id":"c435f5f8-577e-419a-b22f-1486f5d1c836","type":"BasicTicker"}},"id":"5d730ed4-8c54-4008-9ce0-da5bbec8c42b","type":"LinearAxis"},{"attributes":{"source":{"id":"3ad4d110-690c-48eb-9aed-fc9669d4d229","type":"ColumnDataSource"}},"id":"1d48f9c8-0479-4c86-a46c-0b2b0e9f4bec","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"8b5f7262-8268-4321-85dc-e5171e2c4645","type":"PanTool"},{"id":"384031ef-288f-40f7-a5c2-f6763c774f56","type":"WheelZoomTool"},{"id":"82e90d90-cec1-46d3-8e5c-82c4ea2f0d3b","type":"BoxZoomTool"},{"id":"04a20825-5f0c-43f4-bb1d-0fe5c857d909","type":"SaveTool"},{"id":"cded03dd-cdf0-476f-b1f1-18145644dc56","type":"ResetTool"},{"id":"ed5e6b44-43f1-498a-939d-27b439735942","type":"HelpTool"}]},"id":"b8e03082-ef32-4376-ad8a-7f2374025188","type":"Toolbar"},{"attributes":{"overlay":{"id":"c036b18b-1ebe-432c-9bf6-0f19f6b2f6ef","type":"BoxAnnotation"}},"id":"82e90d90-cec1-46d3-8e5c-82c4ea2f0d3b","type":"BoxZoomTool"},{"attributes":{},"id":"6b9c26a2-87f1-424c-8a8e-1845b08150b4","type":"UnionRenderers"}],"root_ids":["cde48525-2b48-4da3-aff5-8e4504fddc98"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"ca49b15e-caf4-4a5c-b5fe-865f92165e57","roots":{"cde48525-2b48-4da3-aff5-8e4504fddc98":"007ac4d3-27c1-41a6-a8b6-23d059e9d0c0"}}];
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