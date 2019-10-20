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
      };var element = document.getElementById("73d1dc00-2542-49bf-8971-521117ffc2a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '73d1dc00-2542-49bf-8971-521117ffc2a0' but no matching script tag was found. ")
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
                var docs_json = {"e258aeba-5b2b-4c1e-898b-a771a0e60be7":{"roots":{"references":[{"attributes":{"callback":null},"id":"620b075b-1f0f-4352-975c-0aad27d29660","type":"DataRange1d"},{"attributes":{},"id":"f753e41a-7875-4900-8afa-7e6c2d22c20d","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"a5b8681c-b581-42be-89bc-bd5d3834dd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea988eb2-a96e-4ef1-b3d2-628d1f647e4b","type":"BasicTicker"}},"id":"17fe5006-a5d8-43d3-bc68-65328a6b7aa6","type":"Grid"},{"attributes":{"callback":null,"tooltips":"\n    <div>\n        <div>\n            <img\n                src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                style=\"float: left; margin: 0px 15px 15px 0px;\"\n                border=\"2\"\n            ></img>\n        </div>\n        <div>\n            <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n            <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n        </div>\n        <div>\n            <span>@fonts{safe}</span>\n        </div>\n        <div>\n            <span style=\"font-size: 15px;\">Location</span>\n            <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n        </div>\n    </div>\n    "},"id":"36ec7c45-c351-45fa-9efe-fbc6d03df0e7","type":"HoverTool"},{"attributes":{},"id":"4c64f034-7cc0-4b26-9db9-458d9204aca5","type":"LinearScale"},{"attributes":{},"id":"59360155-f239-4331-a9b1-73d57fbee6ec","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"f7a695cc-374a-462b-9970-105ddb9dc929","type":"ColumnDataSource"}},"id":"468d700c-7369-4b9a-ab73-879df2a7fae5","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"36ec7c45-c351-45fa-9efe-fbc6d03df0e7","type":"HoverTool"}]},"id":"0092a825-b56e-4e40-bfa5-7407b0997af4","type":"Toolbar"},{"attributes":{"callback":null},"id":"9bba8058-b47a-46ac-80d7-4a1d363a551e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f753e41a-7875-4900-8afa-7e6c2d22c20d","type":"BasicTickFormatter"},"plot":{"id":"a5b8681c-b581-42be-89bc-bd5d3834dd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d695d1b-9b6b-4433-8c98-1233082f5083","type":"BasicTicker"}},"id":"c2036315-09cd-483a-bcc7-35bbb3690c71","type":"LinearAxis"},{"attributes":{"data_source":{"id":"f7a695cc-374a-462b-9970-105ddb9dc929","type":"ColumnDataSource"},"glyph":{"id":"b2ff0c1d-2f27-48c6-8663-6425ada91b5c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d08a705a-348e-4404-91b1-da1decd97609","type":"Circle"},"selection_glyph":null,"view":{"id":"468d700c-7369-4b9a-ab73-879df2a7fae5","type":"CDSView"}},"id":"0ab448b4-7407-4752-88c9-59f938b074bd","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"59360155-f239-4331-a9b1-73d57fbee6ec","type":"BasicTickFormatter"},"plot":{"id":"a5b8681c-b581-42be-89bc-bd5d3834dd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"ea988eb2-a96e-4ef1-b3d2-628d1f647e4b","type":"BasicTicker"}},"id":"164a42b7-f5ee-4bce-b76c-5a1a7d1508a0","type":"LinearAxis"},{"attributes":{},"id":"0af5a894-9177-48bb-9fe5-ed67c5b37362","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b2ff0c1d-2f27-48c6-8663-6425ada91b5c","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"a5b8681c-b581-42be-89bc-bd5d3834dd47","subtype":"Figure","type":"Plot"},"ticker":{"id":"8d695d1b-9b6b-4433-8c98-1233082f5083","type":"BasicTicker"}},"id":"3bba2d5f-fc1c-43a3-8019-33682df5ae35","type":"Grid"},{"attributes":{"below":[{"id":"164a42b7-f5ee-4bce-b76c-5a1a7d1508a0","type":"LinearAxis"}],"left":[{"id":"c2036315-09cd-483a-bcc7-35bbb3690c71","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"164a42b7-f5ee-4bce-b76c-5a1a7d1508a0","type":"LinearAxis"},{"id":"17fe5006-a5d8-43d3-bc68-65328a6b7aa6","type":"Grid"},{"id":"c2036315-09cd-483a-bcc7-35bbb3690c71","type":"LinearAxis"},{"id":"3bba2d5f-fc1c-43a3-8019-33682df5ae35","type":"Grid"},{"id":"0ab448b4-7407-4752-88c9-59f938b074bd","type":"GlyphRenderer"}],"title":{"id":"d4ab6b47-80b9-4733-bfb3-7ef259d2c683","type":"Title"},"toolbar":{"id":"0092a825-b56e-4e40-bfa5-7407b0997af4","type":"Toolbar"},"x_range":{"id":"620b075b-1f0f-4352-975c-0aad27d29660","type":"DataRange1d"},"x_scale":{"id":"0af5a894-9177-48bb-9fe5-ed67c5b37362","type":"LinearScale"},"y_range":{"id":"9bba8058-b47a-46ac-80d7-4a1d363a551e","type":"DataRange1d"},"y_scale":{"id":"4c64f034-7cc0-4b26-9db9-458d9204aca5","type":"LinearScale"}},"id":"a5b8681c-b581-42be-89bc-bd5d3834dd47","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"d08a705a-348e-4404-91b1-da1decd97609","type":"Circle"},{"attributes":{},"id":"8d695d1b-9b6b-4433-8c98-1233082f5083","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","desc","imgs","fonts"],"data":{"desc":["A","b","C","d","E"],"fonts":["<i>italics</i>","<pre>pre</pre>","<b>bold</b>","<small>small</small>","<del>del</del>"],"imgs":["https://bokeh.pydata.org/static/snake.jpg","https://bokeh.pydata.org/static/snake2.png","https://bokeh.pydata.org/static/snake3D.png","https://bokeh.pydata.org/static/snake4_TheRevenge.png","https://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"f7a695cc-374a-462b-9970-105ddb9dc929","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"d4ab6b47-80b9-4733-bfb3-7ef259d2c683","type":"Title"},{"attributes":{},"id":"ea988eb2-a96e-4ef1-b3d2-628d1f647e4b","type":"BasicTicker"}],"root_ids":["a5b8681c-b581-42be-89bc-bd5d3834dd47"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"e258aeba-5b2b-4c1e-898b-a771a0e60be7","elementid":"73d1dc00-2542-49bf-8971-521117ffc2a0","modelid":"a5b8681c-b581-42be-89bc-bd5d3834dd47"}];
                
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
