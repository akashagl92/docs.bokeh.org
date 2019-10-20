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
      };var element = document.getElementById("3e6eaf29-304d-4532-9c32-3bc565196cfd");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3e6eaf29-304d-4532-9c32-3bc565196cfd' but no matching script tag was found. ")
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
                var docs_json = {"ef86e25e-705b-4546-994a-eb9dc8e1df3e":{"roots":{"references":[{"attributes":{"callback":null},"id":"84a05e5b-5369-46b2-8a2a-aaf70b6d045c","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"c7c73958-bd1d-47dd-8b93-35955ff0fcfc","type":"Toolbar"},{"attributes":{"dimension":1,"plot":{"id":"80ae9923-2286-4f5f-b24e-fcf684d342d9","type":"Plot"},"ticker":{"id":"064e8fb6-8839-4e8e-a1ef-6375334bfd6d","type":"BasicTicker"}},"id":"84343c38-fa58-43a6-80e7-670125fafdc5","type":"Grid"},{"attributes":{"below":[{"id":"b6612ccf-616f-4de6-9d1d-79e923d8dfde","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"263b4bfa-d7bf-45c4-9aa4-30bea72e64df","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"881c0b10-8788-44a7-9487-2115eb180149","type":"GlyphRenderer"},{"id":"b6612ccf-616f-4de6-9d1d-79e923d8dfde","type":"LinearAxis"},{"id":"263b4bfa-d7bf-45c4-9aa4-30bea72e64df","type":"LinearAxis"},{"id":"1bc536da-18c9-4e57-ad0f-e3b180413245","type":"Grid"},{"id":"84343c38-fa58-43a6-80e7-670125fafdc5","type":"Grid"}],"title":null,"toolbar":{"id":"c7c73958-bd1d-47dd-8b93-35955ff0fcfc","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"84a05e5b-5369-46b2-8a2a-aaf70b6d045c","type":"DataRange1d"},"x_scale":{"id":"2114d76c-ad7b-4247-a4fd-1106a27aec48","type":"LinearScale"},"y_range":{"id":"5af6e433-0fa7-40a0-a594-a3a068b393f6","type":"DataRange1d"},"y_scale":{"id":"5ae91552-f85e-48d0-b16c-6e8607539d78","type":"LinearScale"}},"id":"80ae9923-2286-4f5f-b24e-fcf684d342d9","type":"Plot"},{"attributes":{"plot":{"id":"80ae9923-2286-4f5f-b24e-fcf684d342d9","type":"Plot"},"ticker":{"id":"36843b17-ccd5-4e9c-93ff-e7713556e7f6","type":"BasicTicker"}},"id":"1bc536da-18c9-4e57-ad0f-e3b180413245","type":"Grid"},{"attributes":{"fill_color":{"value":"#fb9a99"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"67f34810-bd61-4343-8fd1-025bcbe0ec23","type":"Patches"},{"attributes":{},"id":"5ae91552-f85e-48d0-b16c-6e8607539d78","type":"LinearScale"},{"attributes":{},"id":"fb636bee-b729-4462-b7a1-8ca461e12d35","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"fb636bee-b729-4462-b7a1-8ca461e12d35","type":"BasicTickFormatter"},"plot":{"id":"80ae9923-2286-4f5f-b24e-fcf684d342d9","type":"Plot"},"ticker":{"id":"064e8fb6-8839-4e8e-a1ef-6375334bfd6d","type":"BasicTicker"}},"id":"263b4bfa-d7bf-45c4-9aa4-30bea72e64df","type":"LinearAxis"},{"attributes":{"formatter":{"id":"b8d6b6fa-6419-4e0b-9abf-98708002e6f0","type":"BasicTickFormatter"},"plot":{"id":"80ae9923-2286-4f5f-b24e-fcf684d342d9","type":"Plot"},"ticker":{"id":"36843b17-ccd5-4e9c-93ff-e7713556e7f6","type":"BasicTicker"}},"id":"b6612ccf-616f-4de6-9d1d-79e923d8dfde","type":"LinearAxis"},{"attributes":{},"id":"36843b17-ccd5-4e9c-93ff-e7713556e7f6","type":"BasicTicker"},{"attributes":{},"id":"b8d6b6fa-6419-4e0b-9abf-98708002e6f0","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"dea86fcf-8cf4-4068-b612-4be248c96bd8","type":"ColumnDataSource"},"glyph":{"id":"67f34810-bd61-4343-8fd1-025bcbe0ec23","type":"Patches"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"0bf0366c-e861-4289-b89a-fc6d72b01bd1","type":"CDSView"}},"id":"881c0b10-8788-44a7-9487-2115eb180149","type":"GlyphRenderer"},{"attributes":{"source":{"id":"dea86fcf-8cf4-4068-b612-4be248c96bd8","type":"ColumnDataSource"}},"id":"0bf0366c-e861-4289-b89a-fc6d72b01bd1","type":"CDSView"},{"attributes":{"callback":null},"id":"5af6e433-0fa7-40a0-a594-a3a068b393f6","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["xs","ys"],"data":{"xs":[{"__ndarray__":"uB6F61G4AMD2KFyPwvUAwAAAAAAAAADAFK5H4XoU/r+PwvUoXI/+vw==","dtype":"float64","shape":[5]},{"__ndarray__":"L90kBoGV+b/qJjEIrBz6vwAAAAAAAPi/FtnO91Pj9b/RItv5fmr2vw==","dtype":"float64","shape":[5]},{"__ndarray__":"7nw/NV668b/n+6nx0k3yvwAAAAAAAPC/MQisHFpk678lBoGVQ4vsvw==","dtype":"float64","shape":[5]},{"__ndarray__":"WDm0yHa+47/LoUW28/3kvwAAAAAAAOC/arx0kxgE1r9QjZduEoPYvw==","dtype":"float64","shape":[5]},{"__ndarray__":"VOOlm8QgwL8aL90kBoHFvwAAAAAAAAAAGi/dJAaBxT9U46WbxCDAPw==","dtype":"float64","shape":[5]},{"__ndarray__":"XI/C9Shc1z97FK5H4XrUPwAAAAAAAOA/wvUoXI/C5T9SuB6F61HkPw==","dtype":"float64","shape":[5]},{"__ndarray__":"MQisHFpk6z9CYOXQItvpPwAAAAAAAPA/30+Nl24S8z/n+6nx0k3yPw==","dtype":"float64","shape":[5]},{"__ndarray__":"WmQ730+N9T8j2/l+arz0PwAAAAAAAPg/3SQGgZVD+z+mm8QgsHL6Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"nMQgsHJo/T8lBoGVQ4v8PwAAAAAAAABA7nw/NV66AUCyne+nxksBQA==","dtype":"float64","shape":[5]}],"ys":[{"__ndarray__":"MzMzMzMzD0AUrkfhehQQQGZmZmZmZhBAFK5H4XoUEEAzMzMzMzMPQA==","dtype":"float64","shape":[5]},{"__ndarray__":"H4XrUbgeAUCTGARWDi0CQOF6FK5H4QJAkxgEVg4tAkAfhetRuB4BQA==","dtype":"float64","shape":[5]},{"__ndarray__":"KVyPwvUo7D/8qfHSTWLwP+xRuB6F6/E//Knx0k1i8D8pXI/C9SjsPw==","dtype":"float64","shape":[5]},{"__ndarray__":"uB6F61G4vj9Ei2zn+6nRP1K4HoXrUdg/RIts5/up0T+4HoXrUbi+Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"61G4HoXrwb946SYxCKycP+tRuB6F68E/eOkmMQisnD/rUbgehevBvw==","dtype":"float64","shape":[5]},{"__ndarray__":"mJmZmZmZuT/sUbgehevRP5qZmZmZmdk/7FG4HoXr0T+YmZmZmZm5Pw==","dtype":"float64","shape":[5]},{"__ndarray__":"4XoUrkfh6j9QjZduEoPwP5DC9Shcj/I/UI2XbhKD8D/hehSuR+HqPw==","dtype":"float64","shape":[5]},{"__ndarray__":"pHA9CtejAEASg8DKoUUCQFyPwvUoXANAEoPAyqFFAkCkcD0K16MAQA==","dtype":"float64","shape":[5]},{"__ndarray__":"j8L1KFyPDkC+nxov3SQQQLgehetRuBBAvp8aL90kEECPwvUoXI8OQA==","dtype":"float64","shape":[5]}]}},"id":"dea86fcf-8cf4-4068-b612-4be248c96bd8","type":"ColumnDataSource"},{"attributes":{},"id":"064e8fb6-8839-4e8e-a1ef-6375334bfd6d","type":"BasicTicker"},{"attributes":{},"id":"2114d76c-ad7b-4247-a4fd-1106a27aec48","type":"LinearScale"}],"root_ids":["80ae9923-2286-4f5f-b24e-fcf684d342d9"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ef86e25e-705b-4546-994a-eb9dc8e1df3e","elementid":"3e6eaf29-304d-4532-9c32-3bc565196cfd","modelid":"80ae9923-2286-4f5f-b24e-fcf684d342d9"}];
                
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
