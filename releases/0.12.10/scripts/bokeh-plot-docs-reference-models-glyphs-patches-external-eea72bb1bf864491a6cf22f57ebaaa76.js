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
      };var element = document.getElementById("902181d3-ed46-4d7b-b8cc-235a10ba351f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '902181d3-ed46-4d7b-b8cc-235a10ba351f' but no matching script tag was found. ")
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
                    var docs_json = {"daec7153-4a5b-4780-af75-f434fe3a08cb":{"roots":{"references":[{"attributes":{},"id":"ef36d746-6db3-4d19-bff5-df6adef0ef70","type":"BasicTicker"},{"attributes":{},"id":"35937c3e-0586-4c4d-ad96-d4ee86ae42e4","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"37f5422b-a650-4663-aebf-890fdf8933c9","type":"Plot"},"ticker":{"id":"fe9021ed-86bb-47f8-a4ed-7f484176389f","type":"BasicTicker"}},"id":"0c897950-3bb3-4ed3-bd17-56607a89796c","type":"Grid"},{"attributes":{},"id":"ecaecf9a-e666-43a5-86e8-8da57c8b9e91","type":"LinearScale"},{"attributes":{"below":[{"id":"4b6c893e-c79e-44a9-b805-a2b78f1dd7a8","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"4a065317-24ec-458b-b03e-52648f545488","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"39357c05-571a-4cdc-a1ef-6b0eea522ba1","type":"GlyphRenderer"},{"id":"4b6c893e-c79e-44a9-b805-a2b78f1dd7a8","type":"LinearAxis"},{"id":"4a065317-24ec-458b-b03e-52648f545488","type":"LinearAxis"},{"id":"5ffe0058-2332-4a38-96e1-11544b61dd5f","type":"Grid"},{"id":"0c897950-3bb3-4ed3-bd17-56607a89796c","type":"Grid"}],"title":null,"toolbar":{"id":"10438dfd-f634-410d-9016-a820c09e55fc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d979db62-860f-417f-a383-16056b83ca8f","type":"DataRange1d"},"x_scale":{"id":"ecaecf9a-e666-43a5-86e8-8da57c8b9e91","type":"LinearScale"},"y_range":{"id":"151d82a3-0221-4dd4-aad5-8254f011af84","type":"DataRange1d"},"y_scale":{"id":"a37b7097-97be-4d84-aefb-3511dc45178f","type":"LinearScale"}},"id":"37f5422b-a650-4663-aebf-890fdf8933c9","type":"Plot"},{"attributes":{},"id":"8ef137b5-9ad1-4829-b441-32cfec9d3695","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"901bafdb-c83f-4e80-8dca-51ac7d6f3bed","type":"ColumnDataSource"},{"attributes":{"source":{"id":"901bafdb-c83f-4e80-8dca-51ac7d6f3bed","type":"ColumnDataSource"}},"id":"ae23dce0-8c36-4e57-bde0-93cce5334be8","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"10438dfd-f634-410d-9016-a820c09e55fc","type":"Toolbar"},{"attributes":{"callback":null},"id":"d979db62-860f-417f-a383-16056b83ca8f","type":"DataRange1d"},{"attributes":{},"id":"a37b7097-97be-4d84-aefb-3511dc45178f","type":"LinearScale"},{"attributes":{"plot":{"id":"37f5422b-a650-4663-aebf-890fdf8933c9","type":"Plot"},"ticker":{"id":"ef36d746-6db3-4d19-bff5-df6adef0ef70","type":"BasicTicker"}},"id":"5ffe0058-2332-4a38-96e1-11544b61dd5f","type":"Grid"},{"attributes":{"data_source":{"id":"901bafdb-c83f-4e80-8dca-51ac7d6f3bed","type":"ColumnDataSource"},"glyph":{"id":"c5756b81-7657-42bd-991d-60484d73e595","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"ae23dce0-8c36-4e57-bde0-93cce5334be8","type":"CDSView"}},"id":"39357c05-571a-4cdc-a1ef-6b0eea522ba1","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"35937c3e-0586-4c4d-ad96-d4ee86ae42e4","type":"BasicTickFormatter"},"plot":{"id":"37f5422b-a650-4663-aebf-890fdf8933c9","type":"Plot"},"ticker":{"id":"fe9021ed-86bb-47f8-a4ed-7f484176389f","type":"BasicTicker"}},"id":"4a065317-24ec-458b-b03e-52648f545488","type":"LinearAxis"},{"attributes":{"formatter":{"id":"8ef137b5-9ad1-4829-b441-32cfec9d3695","type":"BasicTickFormatter"},"plot":{"id":"37f5422b-a650-4663-aebf-890fdf8933c9","type":"Plot"},"ticker":{"id":"ef36d746-6db3-4d19-bff5-df6adef0ef70","type":"BasicTicker"}},"id":"4b6c893e-c79e-44a9-b805-a2b78f1dd7a8","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"c5756b81-7657-42bd-991d-60484d73e595","type":"Patches"},{"attributes":{"callback":null},"id":"151d82a3-0221-4dd4-aad5-8254f011af84","type":"DataRange1d"},{"attributes":{},"id":"fe9021ed-86bb-47f8-a4ed-7f484176389f","type":"BasicTicker"}],"root_ids":["37f5422b-a650-4663-aebf-890fdf8933c9"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"daec7153-4a5b-4780-af75-f434fe3a08cb","elementid":"902181d3-ed46-4d7b-b8cc-235a10ba351f","modelid":"37f5422b-a650-4663-aebf-890fdf8933c9"}];
                
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
