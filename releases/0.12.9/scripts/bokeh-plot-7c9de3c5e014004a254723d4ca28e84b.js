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
      };var element = document.getElementById("e8043b62-0085-4e74-be28-9386659549f1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e8043b62-0085-4e74-be28-9386659549f1' but no matching script tag was found. ")
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
                    var docs_json = {"745744c4-7d83-48de-894e-bdda58ae3c43":{"roots":{"references":[{"attributes":{},"id":"2e24fd23-282c-42d3-8df8-a0fd970aa1bc","type":"LinearScale"},{"attributes":{"callback":null},"id":"562a2267-1aae-4c1b-b0b6-d308af433fb1","type":"DataRange1d"},{"attributes":{"formatter":{"id":"1aa6bec9-966d-44ab-8925-8520452b6835","type":"BasicTickFormatter"},"plot":{"id":"844839ce-f6de-4db7-a18f-a53f44390fd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"f807f12d-d87d-4cc4-9a4b-172eb43cea57","type":"BasicTicker"},"visible":false},"id":"6d604c0a-7189-4e73-a056-778315cc63dc","type":"LinearAxis"},{"attributes":{"source":{"id":"b2cde370-ab4a-46ba-9370-0fa94ebb0f74","type":"ColumnDataSource"}},"id":"d2037722-e199-44f7-9d4a-a48e17a05aa9","type":"CDSView"},{"attributes":{"below":[{"id":"6d604c0a-7189-4e73-a056-778315cc63dc","type":"LinearAxis"}],"left":[{"id":"4e8bc84b-6829-4721-8ceb-6a3217fa3dd3","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"6d604c0a-7189-4e73-a056-778315cc63dc","type":"LinearAxis"},{"id":"16e5af65-8968-406f-97c1-bd6b861d1d60","type":"Grid"},{"id":"4e8bc84b-6829-4721-8ceb-6a3217fa3dd3","type":"LinearAxis"},{"id":"dbd9e923-53e8-4cc0-8ef6-f1ee31373dc8","type":"Grid"},{"id":"a6a693e9-b136-4d62-951b-c54fe47248c6","type":"GlyphRenderer"},{"id":"94f6b75b-e6dc-4080-8e0a-ce20ec832fcb","type":"GlyphRenderer"}],"title":{"id":"86097766-a12d-41f2-bba1-8907baee56e8","type":"Title"},"toolbar":{"id":"b021ecd0-c668-45e3-b806-ab8a6743496d","type":"Toolbar"},"x_range":{"id":"48aa5e3e-4907-4aaf-8daf-50d16f8ffcd5","type":"DataRange1d"},"x_scale":{"id":"16e30686-3ee1-48c4-8773-a2c194122a3a","type":"LinearScale"},"y_range":{"id":"562a2267-1aae-4c1b-b0b6-d308af433fb1","type":"DataRange1d"},"y_scale":{"id":"2e24fd23-282c-42d3-8df8-a0fd970aa1bc","type":"LinearScale"}},"id":"844839ce-f6de-4db7-a18f-a53f44390fd5","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"b021ecd0-c668-45e3-b806-ab8a6743496d","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"d944235a-89a0-4198-9362-932b98c76ad9","type":"Line"},{"attributes":{"data_source":{"id":"311dff23-cc67-4487-9dcb-551ea5239b1b","type":"ColumnDataSource"},"glyph":{"id":"c6aeae16-d13d-49ed-b069-391b64110be5","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9f82b926-daf3-4aaa-9739-2d4a3d4adc47","type":"Line"},"selection_glyph":null,"view":{"id":"044e81c7-8b81-4117-bbc1-ed7ac5dbf805","type":"CDSView"},"visible":false},"id":"94f6b75b-e6dc-4080-8e0a-ce20ec832fcb","type":"GlyphRenderer"},{"attributes":{},"id":"f807f12d-d87d-4cc4-9a4b-172eb43cea57","type":"BasicTicker"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"fb8a7556-ee59-4e32-8d3f-d918236232cf","type":"Line"},{"attributes":{},"id":"b1f9dacf-c583-4624-a6dd-3d5bb63bac7d","type":"BasicTickFormatter"},{"attributes":{},"id":"3cbdfbd6-521d-4fae-b49a-82c075a8d514","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"844839ce-f6de-4db7-a18f-a53f44390fd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cbdfbd6-521d-4fae-b49a-82c075a8d514","type":"BasicTicker"}},"id":"dbd9e923-53e8-4cc0-8ef6-f1ee31373dc8","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"b2cde370-ab4a-46ba-9370-0fa94ebb0f74","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"48aa5e3e-4907-4aaf-8daf-50d16f8ffcd5","type":"DataRange1d"},{"attributes":{"source":{"id":"311dff23-cc67-4487-9dcb-551ea5239b1b","type":"ColumnDataSource"}},"id":"044e81c7-8b81-4117-bbc1-ed7ac5dbf805","type":"CDSView"},{"attributes":{"data_source":{"id":"b2cde370-ab4a-46ba-9370-0fa94ebb0f74","type":"ColumnDataSource"},"glyph":{"id":"fb8a7556-ee59-4e32-8d3f-d918236232cf","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d944235a-89a0-4198-9362-932b98c76ad9","type":"Line"},"selection_glyph":null,"view":{"id":"d2037722-e199-44f7-9d4a-a48e17a05aa9","type":"CDSView"}},"id":"a6a693e9-b136-4d62-951b-c54fe47248c6","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9f82b926-daf3-4aaa-9739-2d4a3d4adc47","type":"Line"},{"attributes":{"plot":null,"text":""},"id":"86097766-a12d-41f2-bba1-8907baee56e8","type":"Title"},{"attributes":{"plot":{"id":"844839ce-f6de-4db7-a18f-a53f44390fd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"f807f12d-d87d-4cc4-9a4b-172eb43cea57","type":"BasicTicker"},"visible":false},"id":"16e5af65-8968-406f-97c1-bd6b861d1d60","type":"Grid"},{"attributes":{"formatter":{"id":"b1f9dacf-c583-4624-a6dd-3d5bb63bac7d","type":"BasicTickFormatter"},"plot":{"id":"844839ce-f6de-4db7-a18f-a53f44390fd5","subtype":"Figure","type":"Plot"},"ticker":{"id":"3cbdfbd6-521d-4fae-b49a-82c075a8d514","type":"BasicTicker"}},"id":"4e8bc84b-6829-4721-8ceb-6a3217fa3dd3","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"311dff23-cc67-4487-9dcb-551ea5239b1b","type":"ColumnDataSource"},{"attributes":{},"id":"1aa6bec9-966d-44ab-8925-8520452b6835","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"c6aeae16-d13d-49ed-b069-391b64110be5","type":"Line"},{"attributes":{},"id":"16e30686-3ee1-48c4-8773-a2c194122a3a","type":"LinearScale"}],"root_ids":["844839ce-f6de-4db7-a18f-a53f44390fd5"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"745744c4-7d83-48de-894e-bdda58ae3c43","elementid":"e8043b62-0085-4e74-be28-9386659549f1","modelid":"844839ce-f6de-4db7-a18f-a53f44390fd5"}];
                
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
