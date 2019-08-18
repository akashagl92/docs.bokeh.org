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
      };var element = document.getElementById("1b92df21-2332-491a-9ef6-e3698683dd8a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1b92df21-2332-491a-9ef6-e3698683dd8a' but no matching script tag was found. ")
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
                var docs_json = {"a088bd5b-886c-44be-afe9-b9882befba7c":{"roots":{"references":[{"attributes":{"callback":null},"id":"4beb6770-9539-4d9e-a766-af7481685bbe","type":"DataRange1d"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#b3de69"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"976026dc-5b54-4821-801b-67b8243e8c4a","type":"Quad"},{"attributes":{"plot":{"id":"69c652b1-2238-4caf-8b44-42f67efb0d37","type":"Plot"},"ticker":{"id":"3b650b84-d8d1-4908-9952-1cf411ad9b10","type":"BasicTicker"}},"id":"cc138913-98e4-454e-b6f7-09af9bafe566","type":"Grid"},{"attributes":{"dimension":1,"plot":{"id":"69c652b1-2238-4caf-8b44-42f67efb0d37","type":"Plot"},"ticker":{"id":"8e9ebf8b-d835-4f60-bbec-097fa52a43b3","type":"BasicTicker"}},"id":"2cef91ac-96a3-4c2a-8f04-3672512a2480","type":"Grid"},{"attributes":{},"id":"3b650b84-d8d1-4908-9952-1cf411ad9b10","type":"BasicTicker"},{"attributes":{"formatter":{"id":"e3820973-ff10-481d-90b6-e4800a8686de","type":"BasicTickFormatter"},"plot":{"id":"69c652b1-2238-4caf-8b44-42f67efb0d37","type":"Plot"},"ticker":{"id":"3b650b84-d8d1-4908-9952-1cf411ad9b10","type":"BasicTicker"}},"id":"97108ed7-812d-4f19-ac5b-fdf26517cdee","type":"LinearAxis"},{"attributes":{"callback":null},"id":"4325f6c1-ee53-44a6-aad6-1e7d64d10710","type":"DataRange1d"},{"attributes":{},"id":"8e9ebf8b-d835-4f60-bbec-097fa52a43b3","type":"BasicTicker"},{"attributes":{},"id":"1e1f5fc4-eeda-4e24-a14f-77f8abb2f3e0","type":"ToolEvents"},{"attributes":{},"id":"dcefca58-bbe3-4949-98e9-41542c6e710a","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"dcefca58-bbe3-4949-98e9-41542c6e710a","type":"BasicTickFormatter"},"plot":{"id":"69c652b1-2238-4caf-8b44-42f67efb0d37","type":"Plot"},"ticker":{"id":"8e9ebf8b-d835-4f60-bbec-097fa52a43b3","type":"BasicTicker"}},"id":"1d6cae9c-e960-4097-b57f-7161528770c2","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto"},"id":"27dd6dc2-1b45-4412-a61e-40628f876a17","type":"Toolbar"},{"attributes":{},"id":"e3820973-ff10-481d-90b6-e4800a8686de","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7b94979e-f651-4c6e-ba91-e4c694c5380d","type":"ColumnDataSource"},"glyph":{"id":"976026dc-5b54-4821-801b-67b8243e8c4a","type":"Quad"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"fea78070-97c8-4e48-9024-08c5ac2d3769","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"97108ed7-812d-4f19-ac5b-fdf26517cdee","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"1d6cae9c-e960-4097-b57f-7161528770c2","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"fea78070-97c8-4e48-9024-08c5ac2d3769","type":"GlyphRenderer"},{"id":"97108ed7-812d-4f19-ac5b-fdf26517cdee","type":"LinearAxis"},{"id":"1d6cae9c-e960-4097-b57f-7161528770c2","type":"LinearAxis"},{"id":"cc138913-98e4-454e-b6f7-09af9bafe566","type":"Grid"},{"id":"2cef91ac-96a3-4c2a-8f04-3672512a2480","type":"Grid"}],"title":null,"tool_events":{"id":"1e1f5fc4-eeda-4e24-a14f-77f8abb2f3e0","type":"ToolEvents"},"toolbar":{"id":"27dd6dc2-1b45-4412-a61e-40628f876a17","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"4beb6770-9539-4d9e-a766-af7481685bbe","type":"DataRange1d"},"y_range":{"id":"4325f6c1-ee53-44a6-aad6-1e7d64d10710","type":"DataRange1d"}},"id":"69c652b1-2238-4caf-8b44-42f67efb0d37","type":"Plot"},{"attributes":{"callback":null,"column_names":["top","bottom","right","left"],"data":{"bottom":{"__ndarray__":"ZmZmZmZmEEAzMzMzMzMEQGZmZmZmZvY/MzMzMzMz5z8AAAAAAADgPzMzMzMzM+c/ZmZmZmZm9j8zMzMzMzMEQGZmZmZmZhBA","dtype":"float64","shape":[9]},"left":{"__ndarray__":"AAAAAAAAAMAAAAAAAAD4vwAAAAAAAPC/AAAAAAAA4L8AAAAAAAAAAAAAAAAAAOA/AAAAAAAA8D8AAAAAAAD4PwAAAAAAAABA","dtype":"float64","shape":[9]},"right":{"__ndarray__":"zMzMzMzM7L+amZmZmZnrvzQzMzMzM+O/AAAAAAAAyL8zMzMzMzPTPzMzMzMzM+k/MzMzMzMz8z9nZmZmZmb3PwAAAAAAAPg/","dtype":"float64","shape":[9]},"top":{"__ndarray__":"AAAAAAAAEEAAAAAAAAACQAAAAAAAAPA/AAAAAAAA0D8AAAAAAAAAAAAAAAAAANA/AAAAAAAA8D8AAAAAAAACQAAAAAAAABBA","dtype":"float64","shape":[9]}}},"id":"7b94979e-f651-4c6e-ba91-e4c694c5380d","type":"ColumnDataSource"}],"root_ids":["69c652b1-2238-4caf-8b44-42f67efb0d37"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"a088bd5b-886c-44be-afe9-b9882befba7c","elementid":"1b92df21-2332-491a-9ef6-e3698683dd8a","modelid":"69c652b1-2238-4caf-8b44-42f67efb0d37"}];
                
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
