(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        try {
          window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete window._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("e72d8af8-8537-4de3-b527-9cf7d29cb16e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e72d8af8-8537-4de3-b527-9cf7d29cb16e' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.js"];
    
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
                var docs_json = {"71e870fa-68e4-403c-a62a-27665b286fe8":{"roots":{"references":[{"attributes":{"plot":{"id":"0567079b-2a47-4005-98bb-d8b7023d0da6","type":"Plot"},"ticker":{"id":"86c75f79-26bc-4a9b-b96d-a2c06016bcbc","type":"BasicTicker"}},"id":"219b3501-6c5e-42e0-8da8-1d99320fddb8","type":"Grid"},{"attributes":{"formatter":{"id":"00b6f0ad-f649-4ff7-bcea-d117fe288b87","type":"BasicTickFormatter"},"plot":{"id":"0567079b-2a47-4005-98bb-d8b7023d0da6","type":"Plot"},"ticker":{"id":"b1289bad-801b-4c9d-8e38-2fdcd9647186","type":"BasicTicker"}},"id":"3ee0b06c-b347-4bbb-936e-ebeb455a44b7","type":"LinearAxis"},{"attributes":{"callback":null},"id":"73a6d131-948e-40f8-9e4d-f01303b32ae3","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"0d958115-784d-4d8a-bfc2-0297c006c654","type":"Toolbar"},{"attributes":{},"id":"00b6f0ad-f649-4ff7-bcea-d117fe288b87","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"d67d4b8b-57fd-41c4-94fd-e2e2f4c636a1","type":"ColumnDataSource"},"glyph":{"id":"b6b1daf8-3104-4ac9-ba8d-fa00257bf012","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null},"id":"a4609c9c-78d4-470e-a8ef-4dd4b3fe4d2a","type":"GlyphRenderer"},{"attributes":{},"id":"90a48bea-5af3-4557-9ddc-d801eb1a03ca","type":"ToolEvents"},{"attributes":{"line_color":{"value":"#8073ac"},"line_width":{"value":2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"b6b1daf8-3104-4ac9-ba8d-fa00257bf012","type":"MultiLine"},{"attributes":{},"id":"1e52715f-4f4c-4a01-a62b-c07a48d9a668","type":"LinearScale"},{"attributes":{"callback":null},"id":"f44b9594-0299-479a-ab0f-bc4354438687","type":"DataRange1d"},{"attributes":{},"id":"86c75f79-26bc-4a9b-b96d-a2c06016bcbc","type":"BasicTicker"},{"attributes":{},"id":"18786ce3-39ad-4b17-ab88-32c51d0e8a68","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"0567079b-2a47-4005-98bb-d8b7023d0da6","type":"Plot"},"ticker":{"id":"b1289bad-801b-4c9d-8e38-2fdcd9647186","type":"BasicTicker"}},"id":"d2de541b-8572-46f3-b866-d1de51e90c11","type":"Grid"},{"attributes":{"below":[{"id":"c5344933-d171-4d44-a948-37a01614fd41","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"3ee0b06c-b347-4bbb-936e-ebeb455a44b7","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"a4609c9c-78d4-470e-a8ef-4dd4b3fe4d2a","type":"GlyphRenderer"},{"id":"c5344933-d171-4d44-a948-37a01614fd41","type":"LinearAxis"},{"id":"3ee0b06c-b347-4bbb-936e-ebeb455a44b7","type":"LinearAxis"},{"id":"219b3501-6c5e-42e0-8da8-1d99320fddb8","type":"Grid"},{"id":"d2de541b-8572-46f3-b866-d1de51e90c11","type":"Grid"}],"title":null,"tool_events":{"id":"90a48bea-5af3-4557-9ddc-d801eb1a03ca","type":"ToolEvents"},"toolbar":{"id":"0d958115-784d-4d8a-bfc2-0297c006c654","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f44b9594-0299-479a-ab0f-bc4354438687","type":"DataRange1d"},"x_scale":{"id":"18786ce3-39ad-4b17-ab88-32c51d0e8a68","type":"LinearScale"},"y_range":{"id":"73a6d131-948e-40f8-9e4d-f01303b32ae3","type":"DataRange1d"},"y_scale":{"id":"1e52715f-4f4c-4a01-a62b-c07a48d9a668","type":"LinearScale"}},"id":"0567079b-2a47-4005-98bb-d8b7023d0da6","type":"Plot"},{"attributes":{"callback":null,"column_names":["ys","xs"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"d67d4b8b-57fd-41c4-94fd-e2e2f4c636a1","type":"ColumnDataSource"},{"attributes":{},"id":"ba04a94f-d1a3-494d-9528-2434bb84cf8f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ba04a94f-d1a3-494d-9528-2434bb84cf8f","type":"BasicTickFormatter"},"plot":{"id":"0567079b-2a47-4005-98bb-d8b7023d0da6","type":"Plot"},"ticker":{"id":"86c75f79-26bc-4a9b-b96d-a2c06016bcbc","type":"BasicTicker"}},"id":"c5344933-d171-4d44-a948-37a01614fd41","type":"LinearAxis"},{"attributes":{},"id":"b1289bad-801b-4c9d-8e38-2fdcd9647186","type":"BasicTicker"}],"root_ids":["0567079b-2a47-4005-98bb-d8b7023d0da6"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"71e870fa-68e4-403c-a62a-27665b286fe8","elementid":"e72d8af8-8537-4de3-b527-9cf7d29cb16e","modelid":"0567079b-2a47-4005-98bb-d8b7023d0da6"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.6.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.6.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
