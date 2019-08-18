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
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
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
      };var element = document.getElementById("445be14e-a7e7-406f-abd4-0a72a641246b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '445be14e-a7e7-406f-abd4-0a72a641246b' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"f0182c0d-c917-4a69-9d49-2a6e2d1d9625":{"roots":{"references":[{"attributes":{"below":[{"id":"78477457-62d7-4ed1-b84c-f0b184f5be6e","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"ebca2abb-5d5b-4700-93c0-369225ae6350","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"9a602d8d-67cc-4fef-82e3-4601ef857842","type":"GlyphRenderer"},{"id":"78477457-62d7-4ed1-b84c-f0b184f5be6e","type":"LinearAxis"},{"id":"ebca2abb-5d5b-4700-93c0-369225ae6350","type":"LinearAxis"},{"id":"64d8a790-ad6a-494d-b36f-be232515973f","type":"Grid"},{"id":"a409681a-b39d-4201-a396-bc1996a5c797","type":"Grid"}],"title":null,"tool_events":{"id":"23cd807f-7612-41ae-a3ed-242689144443","type":"ToolEvents"},"toolbar":{"id":"9b5d7cd4-c221-411e-a06c-a30982226ae8","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"461839a8-4130-497f-8796-eeb9d03cc617","type":"DataRange1d"},"y_range":{"id":"9a3f83e6-e896-46f3-ba67-75510aca52fc","type":"DataRange1d"}},"id":"df8a698d-672c-424e-a2c1-6ddf7a508298","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"df8a698d-672c-424e-a2c1-6ddf7a508298","type":"Plot"},"ticker":{"id":"6ccac1bf-4854-4091-afa8-578cc1a10b87","type":"BasicTicker"}},"id":"a409681a-b39d-4201-a396-bc1996a5c797","type":"Grid"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"c0fb1ab2-8398-495b-a3a3-bac13e52bce0","type":"Patches"},{"attributes":{},"id":"adbc30c7-ee96-4366-ad3c-e38f0cfad93b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"9a3f83e6-e896-46f3-ba67-75510aca52fc","type":"DataRange1d"},{"attributes":{"data_source":{"id":"b7dcda70-0e86-463e-9202-52b8a77d5afa","type":"ColumnDataSource"},"glyph":{"id":"c0fb1ab2-8398-495b-a3a3-bac13e52bce0","type":"Patches"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"9a602d8d-67cc-4fef-82e3-4601ef857842","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"9b5d7cd4-c221-411e-a06c-a30982226ae8","type":"Toolbar"},{"attributes":{},"id":"6ccac1bf-4854-4091-afa8-578cc1a10b87","type":"BasicTicker"},{"attributes":{"plot":{"id":"df8a698d-672c-424e-a2c1-6ddf7a508298","type":"Plot"},"ticker":{"id":"adbc30c7-ee96-4366-ad3c-e38f0cfad93b","type":"BasicTicker"}},"id":"64d8a790-ad6a-494d-b36f-be232515973f","type":"Grid"},{"attributes":{},"id":"c5704d30-80f4-4476-9171-2fa98eab82a8","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"b7dcda70-0e86-463e-9202-52b8a77d5afa","type":"ColumnDataSource"},{"attributes":{},"id":"23cd807f-7612-41ae-a3ed-242689144443","type":"ToolEvents"},{"attributes":{},"id":"ceb76de4-f031-4dad-a720-1cc32f5f035b","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"ceb76de4-f031-4dad-a720-1cc32f5f035b","type":"BasicTickFormatter"},"plot":{"id":"df8a698d-672c-424e-a2c1-6ddf7a508298","type":"Plot"},"ticker":{"id":"adbc30c7-ee96-4366-ad3c-e38f0cfad93b","type":"BasicTicker"}},"id":"78477457-62d7-4ed1-b84c-f0b184f5be6e","type":"LinearAxis"},{"attributes":{"callback":null},"id":"461839a8-4130-497f-8796-eeb9d03cc617","type":"DataRange1d"},{"attributes":{"formatter":{"id":"c5704d30-80f4-4476-9171-2fa98eab82a8","type":"BasicTickFormatter"},"plot":{"id":"df8a698d-672c-424e-a2c1-6ddf7a508298","type":"Plot"},"ticker":{"id":"6ccac1bf-4854-4091-afa8-578cc1a10b87","type":"BasicTicker"}},"id":"ebca2abb-5d5b-4700-93c0-369225ae6350","type":"LinearAxis"}],"root_ids":["df8a698d-672c-424e-a2c1-6ddf7a508298"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"f0182c0d-c917-4a69-9d49-2a6e2d1d9625","elementid":"445be14e-a7e7-406f-abd4-0a72a641246b","modelid":"df8a698d-672c-424e-a2c1-6ddf7a508298"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
