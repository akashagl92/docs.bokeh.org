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
      };var element = document.getElementById("eb407030-6f69-4371-8287-d5af7d7136d1");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'eb407030-6f69-4371-8287-d5af7d7136d1' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"bcfed60a-be35-4427-9ef5-3fc414a5d438":{"roots":{"references":[{"attributes":{},"id":"a662c08c-0315-4ae1-9a91-7b4f8aa79a63","type":"LinearScale"},{"attributes":{"plot":{"id":"ea4fed09-cf28-4b12-8a5a-92f128ae1e94","type":"Plot"},"ticker":{"id":"4b696fd4-31df-4a95-8769-47611a48a564","type":"BasicTicker"}},"id":"8fbde59e-cd4e-4936-9984-ad730b71bdb6","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"ea4fed09-cf28-4b12-8a5a-92f128ae1e94","type":"Plot"},"ticker":{"id":"b36dd1d8-5a43-4b79-a483-59dcecdd21eb","type":"BasicTicker"}},"id":"25f0206f-e4e9-43b6-abf6-f5d6e13ed213","type":"Grid"},{"attributes":{},"id":"b36dd1d8-5a43-4b79-a483-59dcecdd21eb","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"d1115ac8-25b2-493f-b396-56477f3de032","type":"Patches"},{"attributes":{},"id":"cec8a59e-19d6-4be7-b273-0641f526719e","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"cec8a59e-19d6-4be7-b273-0641f526719e","type":"BasicTickFormatter"},"plot":{"id":"ea4fed09-cf28-4b12-8a5a-92f128ae1e94","type":"Plot"},"ticker":{"id":"4b696fd4-31df-4a95-8769-47611a48a564","type":"BasicTicker"}},"id":"5adcd656-1c4d-4ba3-a47d-6fd2bdcf66c1","type":"LinearAxis"},{"attributes":{},"id":"c1df3d48-ab61-42a7-8070-407114b55691","type":"Selection"},{"attributes":{"data_source":{"id":"2d09dcfa-7e01-459b-b767-9ff73fc9984f","type":"ColumnDataSource"},"glyph":{"id":"d1115ac8-25b2-493f-b396-56477f3de032","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"93be0f9a-64fa-4208-aced-8f67c4c8c8d3","type":"CDSView"}},"id":"556d775e-decb-4351-bfa3-be3c4e8b8721","type":"GlyphRenderer"},{"attributes":{},"id":"99fe5e8c-42c4-4b27-bc0a-25b903d6c629","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"18dd08a5-1a3a-427f-abe2-2b970239d488","type":"Toolbar"},{"attributes":{"formatter":{"id":"b85acae1-2c40-4fa8-aaa5-443ff2b011dd","type":"BasicTickFormatter"},"plot":{"id":"ea4fed09-cf28-4b12-8a5a-92f128ae1e94","type":"Plot"},"ticker":{"id":"b36dd1d8-5a43-4b79-a483-59dcecdd21eb","type":"BasicTicker"}},"id":"8bba9de2-365f-4e53-a588-84d69ae0712f","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]},"selected":{"id":"c1df3d48-ab61-42a7-8070-407114b55691","type":"Selection"},"selection_policy":{"id":"4a314b00-730e-4229-a823-e5976eb9d12f","type":"UnionRenderers"}},"id":"2d09dcfa-7e01-459b-b767-9ff73fc9984f","type":"ColumnDataSource"},{"attributes":{},"id":"4a314b00-730e-4229-a823-e5976eb9d12f","type":"UnionRenderers"},{"attributes":{"below":[{"id":"5adcd656-1c4d-4ba3-a47d-6fd2bdcf66c1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"8bba9de2-365f-4e53-a588-84d69ae0712f","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"556d775e-decb-4351-bfa3-be3c4e8b8721","type":"GlyphRenderer"},{"id":"5adcd656-1c4d-4ba3-a47d-6fd2bdcf66c1","type":"LinearAxis"},{"id":"8bba9de2-365f-4e53-a588-84d69ae0712f","type":"LinearAxis"},{"id":"8fbde59e-cd4e-4936-9984-ad730b71bdb6","type":"Grid"},{"id":"25f0206f-e4e9-43b6-abf6-f5d6e13ed213","type":"Grid"}],"title":null,"toolbar":{"id":"18dd08a5-1a3a-427f-abe2-2b970239d488","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"0b35104e-de82-41e9-acab-7a9d0e8bda57","type":"DataRange1d"},"x_scale":{"id":"a662c08c-0315-4ae1-9a91-7b4f8aa79a63","type":"LinearScale"},"y_range":{"id":"633e0469-6ae0-475e-a9ca-a2000fc2182a","type":"DataRange1d"},"y_scale":{"id":"99fe5e8c-42c4-4b27-bc0a-25b903d6c629","type":"LinearScale"}},"id":"ea4fed09-cf28-4b12-8a5a-92f128ae1e94","type":"Plot"},{"attributes":{},"id":"4b696fd4-31df-4a95-8769-47611a48a564","type":"BasicTicker"},{"attributes":{"callback":null},"id":"0b35104e-de82-41e9-acab-7a9d0e8bda57","type":"DataRange1d"},{"attributes":{},"id":"b85acae1-2c40-4fa8-aaa5-443ff2b011dd","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"2d09dcfa-7e01-459b-b767-9ff73fc9984f","type":"ColumnDataSource"}},"id":"93be0f9a-64fa-4208-aced-8f67c4c8c8d3","type":"CDSView"},{"attributes":{"callback":null},"id":"633e0469-6ae0-475e-a9ca-a2000fc2182a","type":"DataRange1d"}],"root_ids":["ea4fed09-cf28-4b12-8a5a-92f128ae1e94"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"bcfed60a-be35-4427-9ef5-3fc414a5d438","roots":{"ea4fed09-cf28-4b12-8a5a-92f128ae1e94":"eb407030-6f69-4371-8287-d5af7d7136d1"}}];
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