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
      };var element = document.getElementById("83450de4-c084-4b9b-8a88-e2247fe7302f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '83450de4-c084-4b9b-8a88-e2247fe7302f' but no matching script tag was found. ")
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
                    var docs_json = {"19dfe072-a7d5-4738-80f5-68dc239d3bc1":{"roots":{"references":[{"attributes":{"below":[{"id":"8de54738-d673-40bf-8550-e179346ed93c","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"780c41a4-9951-4930-80f5-a9e6f91cbcbc","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a852cb3b-bd6f-43d5-a721-b8467efcb0e2","type":"GlyphRenderer"},{"id":"8de54738-d673-40bf-8550-e179346ed93c","type":"LinearAxis"},{"id":"780c41a4-9951-4930-80f5-a9e6f91cbcbc","type":"LinearAxis"},{"id":"dd7cd22c-2209-4fa6-bb25-f788c8f7d49e","type":"Grid"},{"id":"73309ca8-7b22-4542-a407-487852b84dd2","type":"Grid"}],"title":null,"toolbar":{"id":"aaa23df3-d05d-471c-b969-9ba5a1f7d653","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"07c5d078-a29b-4585-a0a8-80243aa63654","type":"DataRange1d"},"x_scale":{"id":"d2628a1c-b70b-437e-a9e3-7cfbab48bb60","type":"LinearScale"},"y_range":{"id":"ac2a4b9a-c137-4299-a0da-71d0f380f2b4","type":"DataRange1d"},"y_scale":{"id":"9cf941ab-0828-4cf5-8986-6920581c7a2d","type":"LinearScale"}},"id":"9406e669-ccf9-4c61-b709-f3232089759d","type":"Plot"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"50bc1bee-587c-4bb1-9561-aa7fa8b41558","type":"MultiLine"},{"attributes":{"data_source":{"id":"fd630dd9-be54-4299-91f8-45a3290665fd","type":"ColumnDataSource"},"glyph":{"id":"50bc1bee-587c-4bb1-9561-aa7fa8b41558","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"4c848c44-7875-4bb3-82ae-e90924b257ad","type":"CDSView"}},"id":"a852cb3b-bd6f-43d5-a721-b8467efcb0e2","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"6a365dcf-9009-4775-9096-37db002b7606","type":"BasicTickFormatter"},"plot":{"id":"9406e669-ccf9-4c61-b709-f3232089759d","type":"Plot"},"ticker":{"id":"cf152cac-85aa-4191-a075-230ffc89fdbb","type":"BasicTicker"}},"id":"8de54738-d673-40bf-8550-e179346ed93c","type":"LinearAxis"},{"attributes":{},"id":"cf152cac-85aa-4191-a075-230ffc89fdbb","type":"BasicTicker"},{"attributes":{"callback":null},"id":"07c5d078-a29b-4585-a0a8-80243aa63654","type":"DataRange1d"},{"attributes":{"formatter":{"id":"68e05066-c344-4ab3-98c2-13dc068e687d","type":"BasicTickFormatter"},"plot":{"id":"9406e669-ccf9-4c61-b709-f3232089759d","type":"Plot"},"ticker":{"id":"e939d061-fc68-4010-99dc-d97ea7bf7e79","type":"BasicTicker"}},"id":"780c41a4-9951-4930-80f5-a9e6f91cbcbc","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"fd630dd9-be54-4299-91f8-45a3290665fd","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"9406e669-ccf9-4c61-b709-f3232089759d","type":"Plot"},"ticker":{"id":"cf152cac-85aa-4191-a075-230ffc89fdbb","type":"BasicTicker"}},"id":"dd7cd22c-2209-4fa6-bb25-f788c8f7d49e","type":"Grid"},{"attributes":{"source":{"id":"fd630dd9-be54-4299-91f8-45a3290665fd","type":"ColumnDataSource"}},"id":"4c848c44-7875-4bb3-82ae-e90924b257ad","type":"CDSView"},{"attributes":{},"id":"6a365dcf-9009-4775-9096-37db002b7606","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ac2a4b9a-c137-4299-a0da-71d0f380f2b4","type":"DataRange1d"},{"attributes":{},"id":"e939d061-fc68-4010-99dc-d97ea7bf7e79","type":"BasicTicker"},{"attributes":{},"id":"9cf941ab-0828-4cf5-8986-6920581c7a2d","type":"LinearScale"},{"attributes":{},"id":"d2628a1c-b70b-437e-a9e3-7cfbab48bb60","type":"LinearScale"},{"attributes":{},"id":"68e05066-c344-4ab3-98c2-13dc068e687d","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"9406e669-ccf9-4c61-b709-f3232089759d","type":"Plot"},"ticker":{"id":"e939d061-fc68-4010-99dc-d97ea7bf7e79","type":"BasicTicker"}},"id":"73309ca8-7b22-4542-a407-487852b84dd2","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"aaa23df3-d05d-471c-b969-9ba5a1f7d653","type":"Toolbar"}],"root_ids":["9406e669-ccf9-4c61-b709-f3232089759d"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"19dfe072-a7d5-4738-80f5-68dc239d3bc1","elementid":"83450de4-c084-4b9b-8a88-e2247fe7302f","modelid":"9406e669-ccf9-4c61-b709-f3232089759d"}];
                
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
