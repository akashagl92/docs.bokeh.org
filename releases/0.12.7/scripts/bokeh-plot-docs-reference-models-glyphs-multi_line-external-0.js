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
      };var element = document.getElementById("e1eee79f-5106-4055-910c-e61f27d746e5");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e1eee79f-5106-4055-910c-e61f27d746e5' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"075025d4-fe82-4818-a40d-f067b72ac739":{"roots":{"references":[{"attributes":{"callback":null},"id":"d1465885-1089-49ef-b3ee-f017b1dcd92c","type":"DataRange1d"},{"attributes":{},"id":"f6181b29-00ab-4223-ad97-7479aa677ad3","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"a24bd450-3e11-417a-a7f4-a30a87dd9cf1","type":"BasicTickFormatter"},"plot":{"id":"9b67d34d-7df8-4eb5-a947-f85d7396d841","type":"Plot"},"ticker":{"id":"7d6cc67c-ef99-495f-9c61-abdb1f549b45","type":"BasicTicker"}},"id":"17ec5b75-0c81-4ada-b7f8-b14b075d34dc","type":"LinearAxis"},{"attributes":{},"id":"a8d8c2f8-ca94-49e5-a22d-e023a603dd0b","type":"LinearScale"},{"attributes":{},"id":"7d6cc67c-ef99-495f-9c61-abdb1f549b45","type":"BasicTicker"},{"attributes":{"callback":null},"id":"e4ecec8c-8864-4f5d-86d4-3a56ca8a2ef8","type":"DataRange1d"},{"attributes":{"data_source":{"id":"fc7238d6-8626-4701-8772-027b48adde3a","type":"ColumnDataSource"},"glyph":{"id":"6cbfc6bf-e18a-46f8-87c2-2776d7e3cecc","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"88401eab-0b44-416e-8e73-1150a3e3a95f","type":"CDSView"}},"id":"ee6d4e36-4343-4c9a-a97e-4a54b5c3438c","type":"GlyphRenderer"},{"attributes":{},"id":"5722a358-0934-403e-b889-7df4827c5b7c","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"fc7238d6-8626-4701-8772-027b48adde3a","type":"ColumnDataSource"},{"attributes":{},"id":"a24bd450-3e11-417a-a7f4-a30a87dd9cf1","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"9b67d34d-7df8-4eb5-a947-f85d7396d841","type":"Plot"},"ticker":{"id":"7d6cc67c-ef99-495f-9c61-abdb1f549b45","type":"BasicTicker"}},"id":"103f320f-b795-4bf5-8ed3-87895fd6f159","type":"Grid"},{"attributes":{},"id":"574ca87c-49a9-42bd-8e33-ec631b57762a","type":"LinearScale"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"6cbfc6bf-e18a-46f8-87c2-2776d7e3cecc","type":"MultiLine"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9f531d9a-2e3e-4c17-a3a6-4cc1835d3dbd","type":"Toolbar"},{"attributes":{"source":{"id":"fc7238d6-8626-4701-8772-027b48adde3a","type":"ColumnDataSource"}},"id":"88401eab-0b44-416e-8e73-1150a3e3a95f","type":"CDSView"},{"attributes":{"below":[{"id":"2055cd26-6c6c-4308-b7df-8d4816efa2b1","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"17ec5b75-0c81-4ada-b7f8-b14b075d34dc","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"ee6d4e36-4343-4c9a-a97e-4a54b5c3438c","type":"GlyphRenderer"},{"id":"2055cd26-6c6c-4308-b7df-8d4816efa2b1","type":"LinearAxis"},{"id":"17ec5b75-0c81-4ada-b7f8-b14b075d34dc","type":"LinearAxis"},{"id":"586ab73d-fe4e-490d-a92c-edac134c3fac","type":"Grid"},{"id":"103f320f-b795-4bf5-8ed3-87895fd6f159","type":"Grid"}],"title":null,"toolbar":{"id":"9f531d9a-2e3e-4c17-a3a6-4cc1835d3dbd","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"e4ecec8c-8864-4f5d-86d4-3a56ca8a2ef8","type":"DataRange1d"},"x_scale":{"id":"a8d8c2f8-ca94-49e5-a22d-e023a603dd0b","type":"LinearScale"},"y_range":{"id":"d1465885-1089-49ef-b3ee-f017b1dcd92c","type":"DataRange1d"},"y_scale":{"id":"574ca87c-49a9-42bd-8e33-ec631b57762a","type":"LinearScale"}},"id":"9b67d34d-7df8-4eb5-a947-f85d7396d841","type":"Plot"},{"attributes":{"plot":{"id":"9b67d34d-7df8-4eb5-a947-f85d7396d841","type":"Plot"},"ticker":{"id":"5722a358-0934-403e-b889-7df4827c5b7c","type":"BasicTicker"}},"id":"586ab73d-fe4e-490d-a92c-edac134c3fac","type":"Grid"},{"attributes":{"formatter":{"id":"f6181b29-00ab-4223-ad97-7479aa677ad3","type":"BasicTickFormatter"},"plot":{"id":"9b67d34d-7df8-4eb5-a947-f85d7396d841","type":"Plot"},"ticker":{"id":"5722a358-0934-403e-b889-7df4827c5b7c","type":"BasicTicker"}},"id":"2055cd26-6c6c-4308-b7df-8d4816efa2b1","type":"LinearAxis"}],"root_ids":["9b67d34d-7df8-4eb5-a947-f85d7396d841"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"075025d4-fe82-4818-a40d-f067b72ac739","elementid":"e1eee79f-5106-4055-910c-e61f27d746e5","modelid":"9b67d34d-7df8-4eb5-a947-f85d7396d841"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
