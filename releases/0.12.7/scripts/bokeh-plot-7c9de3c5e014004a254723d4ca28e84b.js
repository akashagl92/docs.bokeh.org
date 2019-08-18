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
      };var element = document.getElementById("101bce34-90cf-45f4-8875-349ca85b211d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '101bce34-90cf-45f4-8875-349ca85b211d' but no matching script tag was found. ")
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
                var docs_json = {"120075a6-19db-4146-8938-33c2cd164abd":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,1]}},"id":"c4ae9bcc-9bb9-485b-a2b1-f87e524d1b4c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3ab2d095-83eb-4897-a8ec-2522ce2063ff","type":"ColumnDataSource"},"glyph":{"id":"86f24b79-2243-477a-b43e-398f1b680fb4","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5e769e7d-5ea6-4444-a8ca-e81b0a0e458a","type":"Line"},"selection_glyph":null,"view":{"id":"d39f5bd5-acd2-4d2f-8f6f-c00f52e73ad5","type":"CDSView"},"visible":false},"id":"a614f237-7aa2-455b-a459-a384008af04e","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"d5558b09-25f8-48c6-a7f6-1f0cae955dc7","type":"LinearAxis"}],"left":[{"id":"2ea0a492-c086-455b-9c81-7469feb87614","type":"LinearAxis"}],"plot_height":200,"plot_width":500,"renderers":[{"id":"d5558b09-25f8-48c6-a7f6-1f0cae955dc7","type":"LinearAxis"},{"id":"2e6304a8-208b-4a74-8bf7-254f664e53df","type":"Grid"},{"id":"2ea0a492-c086-455b-9c81-7469feb87614","type":"LinearAxis"},{"id":"f0c1ab43-cb5e-448d-9eac-eb57f5adb316","type":"Grid"},{"id":"835b3051-60ab-471d-94de-06b6b775bf79","type":"GlyphRenderer"},{"id":"a614f237-7aa2-455b-a459-a384008af04e","type":"GlyphRenderer"}],"title":{"id":"220216a8-b32c-4350-8963-234c210923d4","type":"Title"},"toolbar":{"id":"29cab978-648b-48a8-81e2-5e56dd74fadd","type":"Toolbar"},"x_range":{"id":"d44fc0d0-b660-43fb-81e7-578c9cc76db3","type":"DataRange1d"},"x_scale":{"id":"48cd8a4e-b073-4ab6-82fe-f2f79da128b8","type":"LinearScale"},"y_range":{"id":"b2992285-12f5-4e8f-a20a-f9ff80ad4388","type":"DataRange1d"},"y_scale":{"id":"52ce704c-f848-44a1-8cfa-4060567eccbb","type":"LinearScale"}},"id":"57317624-5ca4-40bf-b413-00362eb390c1","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":{"value":"pink"},"x":{"field":"x"},"y":{"field":"y"}},"id":"86f24b79-2243-477a-b43e-398f1b680fb4","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto"},"id":"29cab978-648b-48a8-81e2-5e56dd74fadd","type":"Toolbar"},{"attributes":{"callback":null},"id":"d44fc0d0-b660-43fb-81e7-578c9cc76db3","type":"DataRange1d"},{"attributes":{},"id":"2e8370ad-62ef-4088-bfc4-c51ea219f7d7","type":"BasicTicker"},{"attributes":{"line_color":{"value":"blue"},"x":{"field":"x"},"y":{"field":"y"}},"id":"2903fb57-e855-4016-baac-0ad0131ec673","type":"Line"},{"attributes":{"formatter":{"id":"eb1de4d9-3d44-4cc7-9567-94dc76a94895","type":"BasicTickFormatter"},"plot":{"id":"57317624-5ca4-40bf-b413-00362eb390c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e8370ad-62ef-4088-bfc4-c51ea219f7d7","type":"BasicTicker"}},"id":"2ea0a492-c086-455b-9c81-7469feb87614","type":"LinearAxis"},{"attributes":{"callback":null},"id":"b2992285-12f5-4e8f-a20a-f9ff80ad4388","type":"DataRange1d"},{"attributes":{},"id":"48cd8a4e-b073-4ab6-82fe-f2f79da128b8","type":"LinearScale"},{"attributes":{"source":{"id":"3ab2d095-83eb-4897-a8ec-2522ce2063ff","type":"ColumnDataSource"}},"id":"d39f5bd5-acd2-4d2f-8f6f-c00f52e73ad5","type":"CDSView"},{"attributes":{},"id":"52ce704c-f848-44a1-8cfa-4060567eccbb","type":"LinearScale"},{"attributes":{"plot":{"id":"57317624-5ca4-40bf-b413-00362eb390c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd905ca1-063a-48d9-b7d6-1386784c57cc","type":"BasicTicker"},"visible":false},"id":"2e6304a8-208b-4a74-8bf7-254f664e53df","type":"Grid"},{"attributes":{"formatter":{"id":"40bc9e2b-406d-4399-afc6-0208fbcb2f16","type":"BasicTickFormatter"},"plot":{"id":"57317624-5ca4-40bf-b413-00362eb390c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"cd905ca1-063a-48d9-b7d6-1386784c57cc","type":"BasicTicker"},"visible":false},"id":"d5558b09-25f8-48c6-a7f6-1f0cae955dc7","type":"LinearAxis"},{"attributes":{},"id":"cd905ca1-063a-48d9-b7d6-1386784c57cc","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"57317624-5ca4-40bf-b413-00362eb390c1","subtype":"Figure","type":"Plot"},"ticker":{"id":"2e8370ad-62ef-4088-bfc4-c51ea219f7d7","type":"BasicTicker"}},"id":"f0c1ab43-cb5e-448d-9eac-eb57f5adb316","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41f6ff7c-d571-4fd6-92bc-cb6448fcc26c","type":"Line"},{"attributes":{},"id":"eb1de4d9-3d44-4cc7-9567-94dc76a94895","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"220216a8-b32c-4350-8963-234c210923d4","type":"Title"},{"attributes":{},"id":"40bc9e2b-406d-4399-afc6-0208fbcb2f16","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"c4ae9bcc-9bb9-485b-a2b1-f87e524d1b4c","type":"ColumnDataSource"},"glyph":{"id":"2903fb57-e855-4016-baac-0ad0131ec673","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"41f6ff7c-d571-4fd6-92bc-cb6448fcc26c","type":"Line"},"selection_glyph":null,"view":{"id":"77e78ec4-e72e-4189-bdba-506ce22d5e70","type":"CDSView"}},"id":"835b3051-60ab-471d-94de-06b6b775bf79","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e769e7d-5ea6-4444-a8ca-e81b0a0e458a","type":"Line"},{"attributes":{"source":{"id":"c4ae9bcc-9bb9-485b-a2b1-f87e524d1b4c","type":"ColumnDataSource"}},"id":"77e78ec4-e72e-4189-bdba-506ce22d5e70","type":"CDSView"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[2,1,2]}},"id":"3ab2d095-83eb-4897-a8ec-2522ce2063ff","type":"ColumnDataSource"}],"root_ids":["57317624-5ca4-40bf-b413-00362eb390c1"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"120075a6-19db-4146-8938-33c2cd164abd","elementid":"101bce34-90cf-45f4-8875-349ca85b211d","modelid":"57317624-5ca4-40bf-b413-00362eb390c1"}];
                
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
