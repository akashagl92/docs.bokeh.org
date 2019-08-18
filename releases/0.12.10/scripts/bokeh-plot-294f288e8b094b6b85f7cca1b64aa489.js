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
      };var element = document.getElementById("82ffe420-eacb-413a-bec8-b94ef7f68238");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '82ffe420-eacb-413a-bec8-b94ef7f68238' but no matching script tag was found. ")
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
                    var docs_json = {"646b9788-0561-4980-8589-1d6f0e20f349":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c6f062a6-0934-4afb-bd66-8e85765bb7db","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"ab98e513-4573-45d3-aa91-d218dc802111","type":"Line"},{"attributes":{"below":[{"id":"564e627a-0d06-4c7d-b801-fcb0a18a3a2a","type":"LinearAxis"}],"left":[{"id":"7fe36850-ba37-4c24-800d-f75a37ad4d1f","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"564e627a-0d06-4c7d-b801-fcb0a18a3a2a","type":"LinearAxis"},{"id":"9c20050b-81b2-4796-b5f2-1526c49e64ee","type":"Grid"},{"id":"7fe36850-ba37-4c24-800d-f75a37ad4d1f","type":"LinearAxis"},{"id":"dbf90101-9558-4782-845f-059e465845e0","type":"Grid"},{"id":"b956b360-daf7-4978-a378-0d4b92ef4d1f","type":"GlyphRenderer"},{"id":"26e94905-fbfe-4e51-813e-8fb1f2e68939","type":"GlyphRenderer"}],"title":{"id":"b2ad2441-a16d-415a-bf8b-cb65e6c0c1e6","type":"Title"},"toolbar":{"id":"c6f062a6-0934-4afb-bd66-8e85765bb7db","type":"Toolbar"},"x_range":{"id":"42ce4879-7020-4945-bcf4-84a5d4b68c56","type":"DataRange1d"},"x_scale":{"id":"ee8d36b9-0880-4dd2-b4f8-40120034f08f","type":"LinearScale"},"y_range":{"id":"074a3570-0a95-45ba-bb13-e5a04125f181","type":"DataRange1d"},"y_scale":{"id":"a84d4afb-edf5-421e-bbf9-02203ad287b3","type":"LinearScale"}},"id":"499b0e86-554b-4e86-8a8a-658fb4f2c5bb","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"a84d4afb-edf5-421e-bbf9-02203ad287b3","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"499b0e86-554b-4e86-8a8a-658fb4f2c5bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e660110-9272-41bd-80a2-69197b493469","type":"BasicTicker"}},"id":"dbf90101-9558-4782-845f-059e465845e0","type":"Grid"},{"attributes":{"formatter":{"id":"622bf6d5-08df-4e1a-a4ad-cda38a017c0f","type":"BasicTickFormatter"},"plot":{"id":"499b0e86-554b-4e86-8a8a-658fb4f2c5bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"1e660110-9272-41bd-80a2-69197b493469","type":"BasicTicker"}},"id":"7fe36850-ba37-4c24-800d-f75a37ad4d1f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"30030160-8156-468b-b5dd-b720fb33a173","type":"ColumnDataSource"},"glyph":{"id":"42d75d02-e5c8-4ee7-a9d2-83e580f00de1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"539705ff-f5b8-44bf-bf7f-a49c4deade56","type":"Line"},"selection_glyph":null,"view":{"id":"769c1afd-5442-451f-9863-aa0000262991","type":"CDSView"}},"id":"b956b360-daf7-4978-a378-0d4b92ef4d1f","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"42d75d02-e5c8-4ee7-a9d2-83e580f00de1","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"30030160-8156-468b-b5dd-b720fb33a173","type":"ColumnDataSource"},{"attributes":{},"id":"f6d2fdac-f1bd-45e1-91f0-1fce28b8288c","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"30030160-8156-468b-b5dd-b720fb33a173","type":"ColumnDataSource"}},"id":"769c1afd-5442-451f-9863-aa0000262991","type":"CDSView"},{"attributes":{"plot":{"id":"499b0e86-554b-4e86-8a8a-658fb4f2c5bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"269a6c37-1ba1-4b9b-97c1-e4c26e82a286","type":"BasicTicker"},"visible":false},"id":"9c20050b-81b2-4796-b5f2-1526c49e64ee","type":"Grid"},{"attributes":{"formatter":{"id":"f6d2fdac-f1bd-45e1-91f0-1fce28b8288c","type":"BasicTickFormatter"},"plot":{"id":"499b0e86-554b-4e86-8a8a-658fb4f2c5bb","subtype":"Figure","type":"Plot"},"ticker":{"id":"269a6c37-1ba1-4b9b-97c1-e4c26e82a286","type":"BasicTicker"},"visible":false},"id":"564e627a-0d06-4c7d-b801-fcb0a18a3a2a","type":"LinearAxis"},{"attributes":{},"id":"269a6c37-1ba1-4b9b-97c1-e4c26e82a286","type":"BasicTicker"},{"attributes":{},"id":"ee8d36b9-0880-4dd2-b4f8-40120034f08f","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"539705ff-f5b8-44bf-bf7f-a49c4deade56","type":"Line"},{"attributes":{"callback":null},"id":"074a3570-0a95-45ba-bb13-e5a04125f181","type":"DataRange1d"},{"attributes":{"callback":null},"id":"42ce4879-7020-4945-bcf4-84a5d4b68c56","type":"DataRange1d"},{"attributes":{"data_source":{"id":"31916f72-a99e-414e-9b3e-c16dab0beb66","type":"ColumnDataSource"},"glyph":{"id":"629879a0-cb39-4037-a966-a140aa684d0b","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ab98e513-4573-45d3-aa91-d218dc802111","type":"Line"},"selection_glyph":null,"view":{"id":"5aee090d-bc5f-41a4-ade9-afaed7ab3603","type":"CDSView"},"visible":false},"id":"26e94905-fbfe-4e51-813e-8fb1f2e68939","type":"GlyphRenderer"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"629879a0-cb39-4037-a966-a140aa684d0b","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"31916f72-a99e-414e-9b3e-c16dab0beb66","type":"ColumnDataSource"},{"attributes":{"source":{"id":"31916f72-a99e-414e-9b3e-c16dab0beb66","type":"ColumnDataSource"}},"id":"5aee090d-bc5f-41a4-ade9-afaed7ab3603","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"b2ad2441-a16d-415a-bf8b-cb65e6c0c1e6","type":"Title"},{"attributes":{},"id":"1e660110-9272-41bd-80a2-69197b493469","type":"BasicTicker"},{"attributes":{},"id":"622bf6d5-08df-4e1a-a4ad-cda38a017c0f","type":"BasicTickFormatter"}],"root_ids":["499b0e86-554b-4e86-8a8a-658fb4f2c5bb"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"646b9788-0561-4980-8589-1d6f0e20f349","elementid":"82ffe420-eacb-413a-bec8-b94ef7f68238","modelid":"499b0e86-554b-4e86-8a8a-658fb4f2c5bb"}];
                
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
