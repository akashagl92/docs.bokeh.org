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
      };var element = document.getElementById("c5749f39-87b4-4425-9e1d-ca7ca296474e");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5749f39-87b4-4425-9e1d-ca7ca296474e' but no matching script tag was found. ")
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
                var docs_json = {"ce9776b6-0fa2-4959-8ca4-4b90399ba927":{"roots":{"references":[{"attributes":{},"id":"f0002a1c-6cfe-4063-996b-325d40764e9a","type":"LinearScale"},{"attributes":{"formatter":{"id":"5c4550e6-b8bb-47fe-ae36-13ad10d635da","type":"BasicTickFormatter"},"plot":{"id":"749864fc-4ea9-429d-8461-aac678d1b257","type":"Plot"},"ticker":{"id":"32879345-a0c0-45c3-a915-cd35c65bdd37","type":"BasicTicker"}},"id":"f6626866-6d93-47f6-952b-084e9744b740","type":"LinearAxis"},{"attributes":{"callback":null},"id":"0d159e0f-9d7b-4ce2-864f-254d7924f117","type":"DataRange1d"},{"attributes":{"callback":null},"id":"4eac53d9-a36f-41ba-95cf-3c7a5ac55d86","type":"DataRange1d"},{"attributes":{},"id":"7182ed9d-5f08-4ae6-bcee-31c0cb15d6d3","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"749864fc-4ea9-429d-8461-aac678d1b257","type":"Plot"},"ticker":{"id":"32879345-a0c0-45c3-a915-cd35c65bdd37","type":"BasicTicker"}},"id":"916bfa69-172f-4f5b-aaf2-895fc42f5126","type":"Grid"},{"attributes":{"data_source":{"id":"d53c7944-b5eb-4260-ae75-8584a61fefdb","type":"ColumnDataSource"},"glyph":{"id":"b30ee22f-d0a9-4102-9943-c845ce2de0a1","type":"Line"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"27ca3ef1-7a4f-4bce-bdb4-00d23d2a9196","type":"CDSView"}},"id":"b1522ef0-1a2d-45c8-8781-eda4acb4ad70","type":"GlyphRenderer"},{"attributes":{},"id":"32879345-a0c0-45c3-a915-cd35c65bdd37","type":"BasicTicker"},{"attributes":{"below":[{"id":"cfdd0a42-79a9-4aea-82d9-e41d0504bad3","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"f6626866-6d93-47f6-952b-084e9744b740","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"b1522ef0-1a2d-45c8-8781-eda4acb4ad70","type":"GlyphRenderer"},{"id":"cfdd0a42-79a9-4aea-82d9-e41d0504bad3","type":"LinearAxis"},{"id":"f6626866-6d93-47f6-952b-084e9744b740","type":"LinearAxis"},{"id":"7ab81a39-5f72-4c11-a0e3-b7c1159da311","type":"Grid"},{"id":"916bfa69-172f-4f5b-aaf2-895fc42f5126","type":"Grid"}],"title":null,"toolbar":{"id":"e56a1ad2-7b7b-47ff-9a95-9cc8df991589","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4eac53d9-a36f-41ba-95cf-3c7a5ac55d86","type":"DataRange1d"},"x_scale":{"id":"f0002a1c-6cfe-4063-996b-325d40764e9a","type":"LinearScale"},"y_range":{"id":"0d159e0f-9d7b-4ce2-864f-254d7924f117","type":"DataRange1d"},"y_scale":{"id":"2f109244-055b-4354-971c-d2a85d9c1220","type":"LinearScale"}},"id":"749864fc-4ea9-429d-8461-aac678d1b257","type":"Plot"},{"attributes":{"plot":{"id":"749864fc-4ea9-429d-8461-aac678d1b257","type":"Plot"},"ticker":{"id":"5cce4522-2708-4e64-81eb-89b9d6510ff9","type":"BasicTicker"}},"id":"7ab81a39-5f72-4c11-a0e3-b7c1159da311","type":"Grid"},{"attributes":{},"id":"2f109244-055b-4354-971c-d2a85d9c1220","type":"LinearScale"},{"attributes":{"formatter":{"id":"7182ed9d-5f08-4ae6-bcee-31c0cb15d6d3","type":"BasicTickFormatter"},"plot":{"id":"749864fc-4ea9-429d-8461-aac678d1b257","type":"Plot"},"ticker":{"id":"5cce4522-2708-4e64-81eb-89b9d6510ff9","type":"BasicTicker"}},"id":"cfdd0a42-79a9-4aea-82d9-e41d0504bad3","type":"LinearAxis"},{"attributes":{"source":{"id":"d53c7944-b5eb-4260-ae75-8584a61fefdb","type":"ColumnDataSource"}},"id":"27ca3ef1-7a4f-4bce-bdb4-00d23d2a9196","type":"CDSView"},{"attributes":{},"id":"5c4550e6-b8bb-47fe-ae36-13ad10d635da","type":"BasicTickFormatter"},{"attributes":{},"id":"5cce4522-2708-4e64-81eb-89b9d6510ff9","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":{"__ndarray__":"AAAAAAAAAMCNsNzTCMv9vxphuacRlvu/qBGWexph+b81wnJPIyz3v8JyTyMs9/S/UCMs9zTC8r/d0wjLPY3wv9QIyz2NsOy/7mmE5Z5G6L8Iyz2NsNzjv0hY7mmE5d6/fBphuacR1r9guacRlnvKv6B7GmG5p7G/oHsaYbmnsT9guacRlnvKP3gaYbmnEdY/SFjuaYTl3j8Iyz2NsNzjP/BphOWeRug/1AjLPY2w7D/c0wjLPY3wP1AjLPc0wvI/wnJPIyz39D80wnJPIyz3P6gRlnsaYfk/GmG5pxGW+z+MsNzTCMv9PwAAAAAAAABA","dtype":"float64","shape":[30]},"y":{"__ndarray__":"AAAAAAAAEEBpbwI4CL0LQG77lpD9xwdAE6S9CeAgBEBTaXajr8cAQF+WgrvYePs/VpM8cSz+9T+EyRpoWh/xP9lxOkDFuOk/HsOHMopq4j+xDTtOB6jYPyT07nfG1M0/XC0TuaBwvj8rDBgpseqlP1onhyRIe3M/WieHJEh7cz8rDBgpseqlP1EtE7mgcL4/JPTud8bUzT+xDTtOB6jYPyHDhzKKauI/2XE6QMW46T+CyRpoWh/xP1aTPHEs/vU/X5aCu9h4+z9RaXajr8cAQBOkvQngIARAbvuWkP3HB0BnbwI4CL0LQAAAAAAAABBA","dtype":"float64","shape":[30]}}},"id":"d53c7944-b5eb-4260-ae75-8584a61fefdb","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.6},"line_color":{"value":"#F46D43"},"line_width":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"b30ee22f-d0a9-4102-9943-c845ce2de0a1","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"e56a1ad2-7b7b-47ff-9a95-9cc8df991589","type":"Toolbar"}],"root_ids":["749864fc-4ea9-429d-8461-aac678d1b257"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"ce9776b6-0fa2-4959-8ca4-4b90399ba927","elementid":"c5749f39-87b4-4425-9e1d-ca7ca296474e","modelid":"749864fc-4ea9-429d-8461-aac678d1b257"}];
                
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
