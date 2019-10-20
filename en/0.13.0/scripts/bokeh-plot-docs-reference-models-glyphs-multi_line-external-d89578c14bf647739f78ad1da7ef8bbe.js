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
      };var element = document.getElementById("fa2a1054-9e55-42f3-b827-64edb0013d83");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'fa2a1054-9e55-42f3-b827-64edb0013d83' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d5f2c6cd-4e1d-46a3-a319-2039500df70c":{"roots":{"references":[{"attributes":{"formatter":{"id":"dba953d2-06ec-456b-87ce-30bc95b312c2","type":"BasicTickFormatter"},"plot":{"id":"0b2a16f3-09c9-40ca-97fd-a041132dee80","type":"Plot"},"ticker":{"id":"07290840-4bfb-4702-8d00-386bbeeb6030","type":"BasicTicker"}},"id":"042653a1-8f95-4648-9713-aa11c8972b9a","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]},"selected":{"id":"a6c84ee0-1470-42aa-97e1-01fbd6538452","type":"Selection"},"selection_policy":{"id":"64aac80d-aa67-4835-9961-e37a28383236","type":"UnionRenderers"}},"id":"ff3bd350-0680-4109-8ded-fef3e254187f","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ff3bd350-0680-4109-8ded-fef3e254187f","type":"ColumnDataSource"},"glyph":{"id":"b0882dda-584a-4753-8a55-f036a6118cc4","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"44635114-1df0-4c97-b010-f5c815b7f20b","type":"CDSView"}},"id":"fd01516b-65c0-4946-8919-0f8b43003c50","type":"GlyphRenderer"},{"attributes":{},"id":"8b94ccbe-41a8-42cc-a0eb-01ba0f242b90","type":"BasicTicker"},{"attributes":{},"id":"29d3991d-3eaa-410f-8411-64fc036999ef","type":"LinearScale"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"b0882dda-584a-4753-8a55-f036a6118cc4","type":"MultiLine"},{"attributes":{},"id":"e7167daa-2c33-46a3-b2ae-9e6768430de5","type":"BasicTickFormatter"},{"attributes":{},"id":"f7cb03e0-c640-4385-b36a-742004cff23a","type":"LinearScale"},{"attributes":{},"id":"07290840-4bfb-4702-8d00-386bbeeb6030","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"0b2a16f3-09c9-40ca-97fd-a041132dee80","type":"Plot"},"ticker":{"id":"07290840-4bfb-4702-8d00-386bbeeb6030","type":"BasicTicker"}},"id":"6c0aae3e-0ecc-4257-8930-89cbcde6777c","type":"Grid"},{"attributes":{"formatter":{"id":"e7167daa-2c33-46a3-b2ae-9e6768430de5","type":"BasicTickFormatter"},"plot":{"id":"0b2a16f3-09c9-40ca-97fd-a041132dee80","type":"Plot"},"ticker":{"id":"8b94ccbe-41a8-42cc-a0eb-01ba0f242b90","type":"BasicTicker"}},"id":"bfa268c9-1a4d-4b5b-a2e5-044fce8f6cdf","type":"LinearAxis"},{"attributes":{"plot":{"id":"0b2a16f3-09c9-40ca-97fd-a041132dee80","type":"Plot"},"ticker":{"id":"8b94ccbe-41a8-42cc-a0eb-01ba0f242b90","type":"BasicTicker"}},"id":"5c234461-9b12-4463-8e5a-4a560df5e08a","type":"Grid"},{"attributes":{"source":{"id":"ff3bd350-0680-4109-8ded-fef3e254187f","type":"ColumnDataSource"}},"id":"44635114-1df0-4c97-b010-f5c815b7f20b","type":"CDSView"},{"attributes":{},"id":"a6c84ee0-1470-42aa-97e1-01fbd6538452","type":"Selection"},{"attributes":{"below":[{"id":"bfa268c9-1a4d-4b5b-a2e5-044fce8f6cdf","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"042653a1-8f95-4648-9713-aa11c8972b9a","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fd01516b-65c0-4946-8919-0f8b43003c50","type":"GlyphRenderer"},{"id":"bfa268c9-1a4d-4b5b-a2e5-044fce8f6cdf","type":"LinearAxis"},{"id":"042653a1-8f95-4648-9713-aa11c8972b9a","type":"LinearAxis"},{"id":"5c234461-9b12-4463-8e5a-4a560df5e08a","type":"Grid"},{"id":"6c0aae3e-0ecc-4257-8930-89cbcde6777c","type":"Grid"}],"title":null,"toolbar":{"id":"55922651-f02f-4da8-b118-81efd97b6bb6","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b7acec5f-c3b6-4e8e-8059-5a598abd7769","type":"DataRange1d"},"x_scale":{"id":"29d3991d-3eaa-410f-8411-64fc036999ef","type":"LinearScale"},"y_range":{"id":"4d5ebd0c-3e41-4099-9b6f-2f7871c0cdc8","type":"DataRange1d"},"y_scale":{"id":"f7cb03e0-c640-4385-b36a-742004cff23a","type":"LinearScale"}},"id":"0b2a16f3-09c9-40ca-97fd-a041132dee80","type":"Plot"},{"attributes":{},"id":"64aac80d-aa67-4835-9961-e37a28383236","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"b7acec5f-c3b6-4e8e-8059-5a598abd7769","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"55922651-f02f-4da8-b118-81efd97b6bb6","type":"Toolbar"},{"attributes":{},"id":"dba953d2-06ec-456b-87ce-30bc95b312c2","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"4d5ebd0c-3e41-4099-9b6f-2f7871c0cdc8","type":"DataRange1d"}],"root_ids":["0b2a16f3-09c9-40ca-97fd-a041132dee80"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d5f2c6cd-4e1d-46a3-a319-2039500df70c","roots":{"0b2a16f3-09c9-40ca-97fd-a041132dee80":"fa2a1054-9e55-42f3-b827-64edb0013d83"}}];
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