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
      };var element = document.getElementById("f744bcd5-9aae-4f9e-a4a8-9ba8ba807ba3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f744bcd5-9aae-4f9e-a4a8-9ba8ba807ba3' but no matching script tag was found. ")
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
                    var docs_json = {"08bc0fcc-5f5b-4593-8626-8e58a73d59db":{"roots":{"references":[{"attributes":{"callback":null},"id":"019983c1-860c-4512-a57a-bc3a017e9070","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"6f6d8d54-eb53-4333-9943-52a98754460a","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"e7f63885-a7f5-4445-9077-dc1e5ce1d2db","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"39ad3a90-3217-4846-a160-6dc33a5fe268","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"4975ba82-0d92-4b62-bb8c-2376bdf625ac","type":"GlyphRenderer"},{"id":"e7f63885-a7f5-4445-9077-dc1e5ce1d2db","type":"LinearAxis"},{"id":"39ad3a90-3217-4846-a160-6dc33a5fe268","type":"LinearAxis"},{"id":"98858055-9a5b-404b-839b-52debe5643b3","type":"Grid"},{"id":"70cf6350-c95d-4b9e-ba4c-c625847fcb0f","type":"Grid"}],"title":null,"toolbar":{"id":"1424dd97-b128-4f55-b7d8-58cf14a77fa3","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"05463dde-7501-411e-8984-79f11526f9b0","type":"DataRange1d"},"x_scale":{"id":"0f33272f-8d71-482e-aeac-17cdcc7291dc","type":"LinearScale"},"y_range":{"id":"019983c1-860c-4512-a57a-bc3a017e9070","type":"DataRange1d"},"y_scale":{"id":"40718708-2fc0-4ec7-ac18-ab2729c1afbe","type":"LinearScale"}},"id":"577d6444-d9f6-4361-81bb-8617a05e86ba","type":"Plot"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"9edd6c52-b592-4965-b2d9-9e5ddfed45c2","type":"Patches"},{"attributes":{"data_source":{"id":"6f6d8d54-eb53-4333-9943-52a98754460a","type":"ColumnDataSource"},"glyph":{"id":"9edd6c52-b592-4965-b2d9-9e5ddfed45c2","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"96ee3279-40bc-421d-908e-ea649ede9a2d","type":"CDSView"}},"id":"4975ba82-0d92-4b62-bb8c-2376bdf625ac","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"171d02db-1d31-421b-af11-217884d00880","type":"BasicTickFormatter"},"plot":{"id":"577d6444-d9f6-4361-81bb-8617a05e86ba","type":"Plot"},"ticker":{"id":"56d06089-59e0-4436-a934-cac49297c1e9","type":"BasicTicker"}},"id":"39ad3a90-3217-4846-a160-6dc33a5fe268","type":"LinearAxis"},{"attributes":{},"id":"18bb394a-9d8f-43b7-980d-6c79baa37418","type":"BasicTickFormatter"},{"attributes":{},"id":"0f33272f-8d71-482e-aeac-17cdcc7291dc","type":"LinearScale"},{"attributes":{},"id":"56d06089-59e0-4436-a934-cac49297c1e9","type":"BasicTicker"},{"attributes":{},"id":"171d02db-1d31-421b-af11-217884d00880","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"18bb394a-9d8f-43b7-980d-6c79baa37418","type":"BasicTickFormatter"},"plot":{"id":"577d6444-d9f6-4361-81bb-8617a05e86ba","type":"Plot"},"ticker":{"id":"35853f34-7cf2-4360-9ebf-648ed09e065e","type":"BasicTicker"}},"id":"e7f63885-a7f5-4445-9077-dc1e5ce1d2db","type":"LinearAxis"},{"attributes":{},"id":"40718708-2fc0-4ec7-ac18-ab2729c1afbe","type":"LinearScale"},{"attributes":{"callback":null},"id":"05463dde-7501-411e-8984-79f11526f9b0","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"577d6444-d9f6-4361-81bb-8617a05e86ba","type":"Plot"},"ticker":{"id":"56d06089-59e0-4436-a934-cac49297c1e9","type":"BasicTicker"}},"id":"70cf6350-c95d-4b9e-ba4c-c625847fcb0f","type":"Grid"},{"attributes":{},"id":"35853f34-7cf2-4360-9ebf-648ed09e065e","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"1424dd97-b128-4f55-b7d8-58cf14a77fa3","type":"Toolbar"},{"attributes":{"source":{"id":"6f6d8d54-eb53-4333-9943-52a98754460a","type":"ColumnDataSource"}},"id":"96ee3279-40bc-421d-908e-ea649ede9a2d","type":"CDSView"},{"attributes":{"plot":{"id":"577d6444-d9f6-4361-81bb-8617a05e86ba","type":"Plot"},"ticker":{"id":"35853f34-7cf2-4360-9ebf-648ed09e065e","type":"BasicTicker"}},"id":"98858055-9a5b-404b-839b-52debe5643b3","type":"Grid"}],"root_ids":["577d6444-d9f6-4361-81bb-8617a05e86ba"]},"title":"Bokeh Application","version":"0.12.8rc2"}};
                    var render_items = [{"docid":"08bc0fcc-5f5b-4593-8626-8e58a73d59db","elementid":"f744bcd5-9aae-4f9e-a4a8-9ba8ba807ba3","modelid":"577d6444-d9f6-4361-81bb-8617a05e86ba"}];
                
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
