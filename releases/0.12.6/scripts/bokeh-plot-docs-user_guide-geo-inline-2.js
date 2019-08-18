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
      };var element = document.getElementById("b99feb65-3447-4741-b281-8c60c12f42b2");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'b99feb65-3447-4741-b281-8c60c12f42b2' but no matching script tag was found. ")
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
                var docs_json = {"1100d815-d2f4-40e9-8d4f-a96b44c3e262":{"roots":{"references":[{"attributes":{},"id":"035d3f4f-8f21-4f14-9398-3bc19db4496e","type":"BasicTicker"},{"attributes":{},"id":"0069a8da-d50b-480c-9358-6a1fbc5bc8e3","type":"ToolEvents"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"3830a631-d844-4ac8-8c59-db0405d3a162","type":"Range1d"},{"attributes":{},"id":"3072294f-b2df-44ef-a3a4-201014848a6f","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"040ba444-0b7b-4930-bc67-d8708c73f721","type":"PanTool"},{"id":"9a4b7d43-bcd9-431b-b114-8f14790e793b","type":"WheelZoomTool"}]},"id":"5c0db7e7-a9e7-422a-b5bd-2e3a20b8f965","type":"Toolbar"},{"attributes":{"plot":{"id":"14db8be2-0eb1-4fa5-b006-5211c1934f26","subtype":"Figure","type":"Plot"}},"id":"9a4b7d43-bcd9-431b-b114-8f14790e793b","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"3072294f-b2df-44ef-a3a4-201014848a6f","type":"BasicTickFormatter"},"plot":{"id":"14db8be2-0eb1-4fa5-b006-5211c1934f26","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3869daf-59ee-43be-9e19-fc9369d2282b","type":"BasicTicker"},"visible":false},"id":"144722cf-5740-4ec4-9469-56df22ce36e7","type":"LinearAxis"},{"attributes":{"below":[{"id":"144722cf-5740-4ec4-9469-56df22ce36e7","type":"LinearAxis"}],"left":[{"id":"86b26581-6c37-474c-9d30-94c99806aec7","type":"LinearAxis"}],"renderers":[{"id":"144722cf-5740-4ec4-9469-56df22ce36e7","type":"LinearAxis"},{"id":"b8a8b99b-0b03-45f3-8abf-1d866b39fa48","type":"Grid"},{"id":"86b26581-6c37-474c-9d30-94c99806aec7","type":"LinearAxis"},{"id":"69677623-58b3-47af-86de-652ee350c011","type":"Grid"},{"id":"64d94079-6d07-4748-a6bf-d52e35774c85","type":"TileRenderer"}],"title":{"id":"e69de2e0-2438-4bf0-be32-228cea489678","type":"Title"},"tool_events":{"id":"0069a8da-d50b-480c-9358-6a1fbc5bc8e3","type":"ToolEvents"},"toolbar":{"id":"5c0db7e7-a9e7-422a-b5bd-2e3a20b8f965","type":"Toolbar"},"x_range":{"id":"f0c5cfca-8feb-4af7-b7bc-612fefa2dd81","type":"Range1d"},"x_scale":{"id":"6adc65cd-fe4b-4ee4-a743-c817a986ff4d","type":"LinearScale"},"y_range":{"id":"3830a631-d844-4ac8-8c59-db0405d3a162","type":"Range1d"},"y_scale":{"id":"8e0c45c9-4367-4df7-841b-2ca307d7c5c4","type":"LinearScale"}},"id":"14db8be2-0eb1-4fa5-b006-5211c1934f26","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"14db8be2-0eb1-4fa5-b006-5211c1934f26","subtype":"Figure","type":"Plot"},"ticker":{"id":"f3869daf-59ee-43be-9e19-fc9369d2282b","type":"BasicTicker"}},"id":"b8a8b99b-0b03-45f3-8abf-1d866b39fa48","type":"Grid"},{"attributes":{"callback":null,"end":20000000,"start":-20000000},"id":"f0c5cfca-8feb-4af7-b7bc-612fefa2dd81","type":"Range1d"},{"attributes":{},"id":"e31cce68-5cf9-4bf4-a14c-8496035065ff","type":"BasicTickFormatter"},{"attributes":{},"id":"8e0c45c9-4367-4df7-841b-2ca307d7c5c4","type":"LinearScale"},{"attributes":{},"id":"f3869daf-59ee-43be-9e19-fc9369d2282b","type":"BasicTicker"},{"attributes":{"plot":{"id":"14db8be2-0eb1-4fa5-b006-5211c1934f26","subtype":"Figure","type":"Plot"}},"id":"040ba444-0b7b-4930-bc67-d8708c73f721","type":"PanTool"},{"attributes":{"tile_source":{"id":"502f07ac-6494-41ce-bdc1-85bc3a9b2608","type":"WMTSTileSource"}},"id":"64d94079-6d07-4748-a6bf-d52e35774c85","type":"TileRenderer"},{"attributes":{"dimension":1,"plot":{"id":"14db8be2-0eb1-4fa5-b006-5211c1934f26","subtype":"Figure","type":"Plot"},"ticker":{"id":"035d3f4f-8f21-4f14-9398-3bc19db4496e","type":"BasicTicker"}},"id":"69677623-58b3-47af-86de-652ee350c011","type":"Grid"},{"attributes":{"formatter":{"id":"e31cce68-5cf9-4bf4-a14c-8496035065ff","type":"BasicTickFormatter"},"plot":{"id":"14db8be2-0eb1-4fa5-b006-5211c1934f26","subtype":"Figure","type":"Plot"},"ticker":{"id":"035d3f4f-8f21-4f14-9398-3bc19db4496e","type":"BasicTicker"},"visible":false},"id":"86b26581-6c37-474c-9d30-94c99806aec7","type":"LinearAxis"},{"attributes":{},"id":"6adc65cd-fe4b-4ee4-a743-c817a986ff4d","type":"LinearScale"},{"attributes":{"plot":null,"text":""},"id":"e69de2e0-2438-4bf0-be32-228cea489678","type":"Title"},{"attributes":{"attribution":"Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>.Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://www.openstreetmap.org/copyright\">ODbL</a>","url":"http://tile.stamen.com/toner/{Z}/{X}/{Y}.png"},"id":"502f07ac-6494-41ce-bdc1-85bc3a9b2608","type":"WMTSTileSource"}],"root_ids":["14db8be2-0eb1-4fa5-b006-5211c1934f26"]},"title":"Bokeh Application","version":"0.12.6"}};
                var render_items = [{"docid":"1100d815-d2f4-40e9-8d4f-a96b44c3e262","elementid":"b99feb65-3447-4741-b281-8c60c12f42b2","modelid":"14db8be2-0eb1-4fa5-b006-5211c1934f26"}];
                
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
