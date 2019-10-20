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
      };var element = document.getElementById("dace98c7-56dc-4d30-80b4-24dc75b54931");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dace98c7-56dc-4d30-80b4-24dc75b54931' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"318da2f5-90b3-4665-a521-051835ea015a":{"roots":{"references":[{"attributes":{"below":[{"id":"cc5cb2c9-9c8c-40d5-8d9e-11a921a259d0","type":"LinearAxis"}],"left":[{"id":"8906ad83-c359-4368-844e-46ed2a17b31a","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"cc5cb2c9-9c8c-40d5-8d9e-11a921a259d0","type":"LinearAxis"},{"id":"c09cc881-b962-47fc-a07f-559a82648f86","type":"Grid"},{"id":"8906ad83-c359-4368-844e-46ed2a17b31a","type":"LinearAxis"},{"id":"d7d4b0da-a1dc-4d39-a79b-626641e40d0f","type":"Grid"},{"id":"28c23cab-908a-427d-a81b-f740bd50b1a7","type":"BoxAnnotation"},{"id":"d4e3828b-ead9-4e35-a9ef-396d79b03637","type":"GlyphRenderer"}],"title":{"id":"ef088815-0eda-4655-b848-f343c5ee6b3a","type":"Title"},"toolbar":{"id":"e3d5dd19-fcc5-4953-8c2c-8f26143c2452","type":"Toolbar"},"x_range":{"id":"0862834d-c907-4663-ad47-d2f822e3cfbc","type":"DataRange1d"},"x_scale":{"id":"fcd8a9a2-9648-474f-9969-eab9ea808655","type":"LinearScale"},"y_range":{"id":"654fab81-4138-4521-979a-1415c3ed3d74","type":"DataRange1d"},"y_scale":{"id":"9d956af8-ec42-4c4a-bbe5-637f94ace7cc","type":"LinearScale"}},"id":"712b9d7b-3a49-4d1d-aec8-05ed45d47a8b","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fcd8a9a2-9648-474f-9969-eab9ea808655","type":"LinearScale"},{"attributes":{},"id":"9d956af8-ec42-4c4a-bbe5-637f94ace7cc","type":"LinearScale"},{"attributes":{},"id":"acb5b637-bdae-44b4-b08a-7876e8597c57","type":"WheelZoomTool"},{"attributes":{},"id":"4031aea8-e4f7-4d3d-b535-b5822d299ea1","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"28c23cab-908a-427d-a81b-f740bd50b1a7","type":"BoxAnnotation"}},"id":"0e23b34c-214a-49cb-8b9d-3f1685892903","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"712b9d7b-3a49-4d1d-aec8-05ed45d47a8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f646b5ae-c5d2-4cf3-a556-3bda9caca03c","type":"BasicTicker"}},"id":"c09cc881-b962-47fc-a07f-559a82648f86","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d979e52-2c10-495f-b788-a043958f1fca","type":"Circle"},{"attributes":{},"id":"dd9d048d-0c73-4000-a38a-4823cfca97b0","type":"BasicTickFormatter"},{"attributes":{},"id":"f1bacc77-1398-4594-bf1f-23aceeed187a","type":"UnionRenderers"},{"attributes":{},"id":"726c1e59-dc87-42f6-9bc5-c4d0fe039b09","type":"SaveTool"},{"attributes":{},"id":"dc177d47-6812-476c-be1f-97a442aa1de0","type":"PanTool"},{"attributes":{},"id":"893b5e33-2ef8-44f5-bf1a-fc1231fad461","type":"HelpTool"},{"attributes":{"callback":null},"id":"0862834d-c907-4663-ad47-d2f822e3cfbc","type":"DataRange1d"},{"attributes":{"callback":null},"id":"654fab81-4138-4521-979a-1415c3ed3d74","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"28c23cab-908a-427d-a81b-f740bd50b1a7","type":"BoxAnnotation"},{"attributes":{"dimension":1,"plot":{"id":"712b9d7b-3a49-4d1d-aec8-05ed45d47a8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"c87e229d-94ea-4b9e-9b59-c860fbdfe3f0","type":"BasicTicker"}},"id":"d7d4b0da-a1dc-4d39-a79b-626641e40d0f","type":"Grid"},{"attributes":{"axis_label":"Bin Count","formatter":{"id":"4031aea8-e4f7-4d3d-b535-b5822d299ea1","type":"BasicTickFormatter"},"plot":{"id":"712b9d7b-3a49-4d1d-aec8-05ed45d47a8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"c87e229d-94ea-4b9e-9b59-c860fbdfe3f0","type":"BasicTicker"}},"id":"8906ad83-c359-4368-844e-46ed2a17b31a","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"24a08be0-7039-4a02-afc5-20561d7660cc","type":"Selection"},"selection_policy":{"id":"f1bacc77-1398-4594-bf1f-23aceeed187a","type":"UnionRenderers"}},"id":"c200b4ff-10a1-419b-9443-3516fc2bf1bb","type":"ColumnDataSource"},{"attributes":{},"id":"2a235189-f332-4487-87a5-1e1ebd40aa6c","type":"ResetTool"},{"attributes":{"source":{"id":"c200b4ff-10a1-419b-9443-3516fc2bf1bb","type":"ColumnDataSource"}},"id":"ad7e04bf-cee2-42f0-9b7c-acd03d483b15","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a29c5567-c4df-4b67-801a-21e206197923","type":"Circle"},{"attributes":{"data_source":{"id":"c200b4ff-10a1-419b-9443-3516fc2bf1bb","type":"ColumnDataSource"},"glyph":{"id":"a29c5567-c4df-4b67-801a-21e206197923","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"0d979e52-2c10-495f-b788-a043958f1fca","type":"Circle"},"selection_glyph":null,"view":{"id":"ad7e04bf-cee2-42f0-9b7c-acd03d483b15","type":"CDSView"}},"id":"d4e3828b-ead9-4e35-a9ef-396d79b03637","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"dc177d47-6812-476c-be1f-97a442aa1de0","type":"PanTool"},{"id":"acb5b637-bdae-44b4-b08a-7876e8597c57","type":"WheelZoomTool"},{"id":"0e23b34c-214a-49cb-8b9d-3f1685892903","type":"BoxZoomTool"},{"id":"726c1e59-dc87-42f6-9bc5-c4d0fe039b09","type":"SaveTool"},{"id":"2a235189-f332-4487-87a5-1e1ebd40aa6c","type":"ResetTool"},{"id":"893b5e33-2ef8-44f5-bf1a-fc1231fad461","type":"HelpTool"}]},"id":"e3d5dd19-fcc5-4953-8c2c-8f26143c2452","type":"Toolbar"},{"attributes":{"plot":null,"text":""},"id":"ef088815-0eda-4655-b848-f343c5ee6b3a","type":"Title"},{"attributes":{},"id":"24a08be0-7039-4a02-afc5-20561d7660cc","type":"Selection"},{"attributes":{},"id":"f646b5ae-c5d2-4cf3-a556-3bda9caca03c","type":"BasicTicker"},{"attributes":{"axis_label":"Lot Number","axis_label_standoff":30,"axis_label_text_color":{"value":"#aa6666"},"formatter":{"id":"dd9d048d-0c73-4000-a38a-4823cfca97b0","type":"BasicTickFormatter"},"plot":{"id":"712b9d7b-3a49-4d1d-aec8-05ed45d47a8b","subtype":"Figure","type":"Plot"},"ticker":{"id":"f646b5ae-c5d2-4cf3-a556-3bda9caca03c","type":"BasicTicker"}},"id":"cc5cb2c9-9c8c-40d5-8d9e-11a921a259d0","type":"LinearAxis"},{"attributes":{},"id":"c87e229d-94ea-4b9e-9b59-c860fbdfe3f0","type":"BasicTicker"}],"root_ids":["712b9d7b-3a49-4d1d-aec8-05ed45d47a8b"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"318da2f5-90b3-4665-a521-051835ea015a","roots":{"712b9d7b-3a49-4d1d-aec8-05ed45d47a8b":"dace98c7-56dc-4d30-80b4-24dc75b54931"}}];
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