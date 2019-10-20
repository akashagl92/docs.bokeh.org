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
      };var element = document.getElementById("61a17d22-b3f3-44db-a797-828237ca9bba");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '61a17d22-b3f3-44db-a797-828237ca9bba' but no matching script tag was found. ")
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
                    var docs_json = {"5be1c45d-90df-4bed-af14-cfcc454bde9d":{"roots":{"references":[{"attributes":{"formatter":{"id":"9256d345-2a5e-40c3-832e-e22db39cfc3b","type":"BasicTickFormatter"},"plot":{"id":"90fc69c4-9014-4920-971f-13233570177f","type":"Plot"},"ticker":{"id":"383d07b7-83b0-4d0f-91f1-d498e77953bd","type":"BasicTicker"}},"id":"dcfcfdbe-830a-4526-a7d7-a2027361fc13","type":"LinearAxis"},{"attributes":{"data_source":{"id":"96f57b4a-95da-4ee7-b25b-7f3737ecd580","type":"ColumnDataSource"},"glyph":{"id":"de2dab8b-5ce5-4675-84cb-70743f2b1508","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"8326544e-6e4b-4101-83f2-5f9f91f1d358","type":"CDSView"}},"id":"a09d5acf-a42b-40b1-84d5-64bf194b4b74","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"90fc69c4-9014-4920-971f-13233570177f","type":"Plot"},"ticker":{"id":"383d07b7-83b0-4d0f-91f1-d498e77953bd","type":"BasicTicker"}},"id":"4e30cadf-652e-4df9-b2d9-9fecd2a7de80","type":"Grid"},{"attributes":{},"id":"78b4a439-5f76-477f-ac54-c5bd04011224","type":"LinearScale"},{"attributes":{"callback":null},"id":"bb97092b-3d57-475a-b737-0ca91448001d","type":"DataRange1d"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"de2dab8b-5ce5-4675-84cb-70743f2b1508","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"05a84571-fd57-4de7-a636-fc0097183cfe","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"96f57b4a-95da-4ee7-b25b-7f3737ecd580","type":"ColumnDataSource"},{"attributes":{},"id":"558e9bb1-6cdb-4c41-a5b3-5514bf2e713f","type":"LinearScale"},{"attributes":{},"id":"383d07b7-83b0-4d0f-91f1-d498e77953bd","type":"BasicTicker"},{"attributes":{"formatter":{"id":"da8031bb-b841-41d7-9119-363e50c11e4a","type":"BasicTickFormatter"},"plot":{"id":"90fc69c4-9014-4920-971f-13233570177f","type":"Plot"},"ticker":{"id":"3f27333a-9c5f-4532-870f-fcd233594da9","type":"BasicTicker"}},"id":"8fe84938-df44-4d69-9f41-82989f6ad8fe","type":"LinearAxis"},{"attributes":{"below":[{"id":"8fe84938-df44-4d69-9f41-82989f6ad8fe","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"dcfcfdbe-830a-4526-a7d7-a2027361fc13","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a09d5acf-a42b-40b1-84d5-64bf194b4b74","type":"GlyphRenderer"},{"id":"8fe84938-df44-4d69-9f41-82989f6ad8fe","type":"LinearAxis"},{"id":"dcfcfdbe-830a-4526-a7d7-a2027361fc13","type":"LinearAxis"},{"id":"84edd5a3-cd00-42e5-ae9a-4df6182e5e20","type":"Grid"},{"id":"4e30cadf-652e-4df9-b2d9-9fecd2a7de80","type":"Grid"}],"title":null,"toolbar":{"id":"05a84571-fd57-4de7-a636-fc0097183cfe","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"08fd34e4-8852-4e7f-bfd2-e0146c3e2040","type":"DataRange1d"},"x_scale":{"id":"78b4a439-5f76-477f-ac54-c5bd04011224","type":"LinearScale"},"y_range":{"id":"bb97092b-3d57-475a-b737-0ca91448001d","type":"DataRange1d"},"y_scale":{"id":"558e9bb1-6cdb-4c41-a5b3-5514bf2e713f","type":"LinearScale"}},"id":"90fc69c4-9014-4920-971f-13233570177f","type":"Plot"},{"attributes":{"plot":{"id":"90fc69c4-9014-4920-971f-13233570177f","type":"Plot"},"ticker":{"id":"3f27333a-9c5f-4532-870f-fcd233594da9","type":"BasicTicker"}},"id":"84edd5a3-cd00-42e5-ae9a-4df6182e5e20","type":"Grid"},{"attributes":{"callback":null},"id":"08fd34e4-8852-4e7f-bfd2-e0146c3e2040","type":"DataRange1d"},{"attributes":{"source":{"id":"96f57b4a-95da-4ee7-b25b-7f3737ecd580","type":"ColumnDataSource"}},"id":"8326544e-6e4b-4101-83f2-5f9f91f1d358","type":"CDSView"},{"attributes":{},"id":"3f27333a-9c5f-4532-870f-fcd233594da9","type":"BasicTicker"},{"attributes":{},"id":"9256d345-2a5e-40c3-832e-e22db39cfc3b","type":"BasicTickFormatter"},{"attributes":{},"id":"da8031bb-b841-41d7-9119-363e50c11e4a","type":"BasicTickFormatter"}],"root_ids":["90fc69c4-9014-4920-971f-13233570177f"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"5be1c45d-90df-4bed-af14-cfcc454bde9d","elementid":"61a17d22-b3f3-44db-a797-828237ca9bba","modelid":"90fc69c4-9014-4920-971f-13233570177f"}];
                
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
