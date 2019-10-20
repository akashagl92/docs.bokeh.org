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
      };var element = document.getElementById("cf447906-1ba1-43c9-a43d-459ef1777b4d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cf447906-1ba1-43c9-a43d-459ef1777b4d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"485d68aa-54db-4dae-b64c-fdbf354301e5":{"roots":{"references":[{"attributes":{},"id":"d9e6c903-5afe-4170-bc03-994c717c930b","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"3d8c69e1-ac27-4012-8f66-702a545ca20e","type":"Circle"},{"attributes":{"formatter":{"id":"c4c76870-e8d5-48b3-9b38-c4be29f449bf","type":"BasicTickFormatter"},"plot":{"id":"c3d5ed98-b824-4688-8318-b4a5ce980f16","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d624f16-fc9e-4f01-bd34-e9bcfbf52c75","type":"BasicTicker"}},"id":"2b71e153-24dc-44de-9237-6ad6657d7944","type":"LinearAxis"},{"attributes":{"formatter":{"id":"d9e6c903-5afe-4170-bc03-994c717c930b","type":"BasicTickFormatter"},"plot":{"id":"c3d5ed98-b824-4688-8318-b4a5ce980f16","subtype":"Figure","type":"Plot"},"ticker":{"id":"16cccf48-7150-4b41-b12f-fbd729d8b0d1","type":"BasicTicker"}},"id":"ba01a326-b48d-46d0-9785-5750e6167775","type":"LinearAxis"},{"attributes":{},"id":"6d624f16-fc9e-4f01-bd34-e9bcfbf52c75","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","fonts","y","desc","imgs"],"data":{"desc":["A","b","C","d","E"],"fonts":["<i>italics</i>","<pre>pre</pre>","<b>bold</b>","<small>small</small>","<del>del</del>"],"imgs":["http://bokeh.pydata.org/static/snake.jpg","http://bokeh.pydata.org/static/snake2.png","http://bokeh.pydata.org/static/snake3D.png","http://bokeh.pydata.org/static/snake4_TheRevenge.png","http://bokeh.pydata.org/static/snakebite.jpg"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"5922d531-4609-44d7-a0fa-d1984f63fc6e","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"2b71e153-24dc-44de-9237-6ad6657d7944","type":"LinearAxis"}],"left":[{"id":"ba01a326-b48d-46d0-9785-5750e6167775","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"2b71e153-24dc-44de-9237-6ad6657d7944","type":"LinearAxis"},{"id":"3ee7ed33-a9a6-43eb-a7e2-9ecf6cf98ffb","type":"Grid"},{"id":"ba01a326-b48d-46d0-9785-5750e6167775","type":"LinearAxis"},{"id":"e0b3e208-a55b-4d74-809f-bf4db59c0328","type":"Grid"},{"id":"3912ae50-ccd9-4f2d-84eb-14130f5f563a","type":"GlyphRenderer"}],"title":{"id":"6bfd72e2-b94c-4bb2-b4dd-2939a5286134","type":"Title"},"tool_events":{"id":"a8287698-559c-4301-af02-7bc119d5de86","type":"ToolEvents"},"toolbar":{"id":"883dcd7c-9d55-48bf-a1ba-345113c032db","type":"Toolbar"},"x_range":{"id":"a09296f0-e270-4ab6-bb01-239457734d7a","type":"DataRange1d"},"y_range":{"id":"7e094d19-7974-46fd-aef2-7bdb308c7b37","type":"DataRange1d"}},"id":"c3d5ed98-b824-4688-8318-b4a5ce980f16","subtype":"Figure","type":"Plot"},{"attributes":{"plot":null,"text":"Mouse over the dots"},"id":"6bfd72e2-b94c-4bb2-b4dd-2939a5286134","type":"Title"},{"attributes":{"data_source":{"id":"5922d531-4609-44d7-a0fa-d1984f63fc6e","type":"ColumnDataSource"},"glyph":{"id":"3d8c69e1-ac27-4012-8f66-702a545ca20e","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7b8a1686-c662-4f5e-9436-6cb4d9d72e5c","type":"Circle"},"selection_glyph":null},"id":"3912ae50-ccd9-4f2d-84eb-14130f5f563a","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"c3d5ed98-b824-4688-8318-b4a5ce980f16","subtype":"Figure","type":"Plot"},"ticker":{"id":"6d624f16-fc9e-4f01-bd34-e9bcfbf52c75","type":"BasicTicker"}},"id":"3ee7ed33-a9a6-43eb-a7e2-9ecf6cf98ffb","type":"Grid"},{"attributes":{"callback":null},"id":"a09296f0-e270-4ab6-bb01-239457734d7a","type":"DataRange1d"},{"attributes":{},"id":"a8287698-559c-4301-af02-7bc119d5de86","type":"ToolEvents"},{"attributes":{"callback":null},"id":"7e094d19-7974-46fd-aef2-7bdb308c7b37","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b8a1686-c662-4f5e-9436-6cb4d9d72e5c","type":"Circle"},{"attributes":{},"id":"c4c76870-e8d5-48b3-9b38-c4be29f449bf","type":"BasicTickFormatter"},{"attributes":{},"id":"16cccf48-7150-4b41-b12f-fbd729d8b0d1","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"b5228dc9-cea9-4911-8d4f-ce14b8500f4e","type":"HoverTool"}]},"id":"883dcd7c-9d55-48bf-a1ba-345113c032db","type":"Toolbar"},{"attributes":{"callback":null,"plot":{"id":"c3d5ed98-b824-4688-8318-b4a5ce980f16","subtype":"Figure","type":"Plot"},"tooltips":"\n        <div>\n            <div>\n                <img\n                    src=\"@imgs\" height=\"42\" alt=\"@imgs\" width=\"42\"\n                    style=\"float: left; margin: 0px 15px 15px 0px;\"\n                    border=\"2\"\n                ></img>\n            </div>\n            <div>\n                <span style=\"font-size: 17px; font-weight: bold;\">@desc</span>\n                <span style=\"font-size: 15px; color: #966;\">[$index]</span>\n            </div>\n            <div>\n                <span>@fonts{safe}</span>\n            </div>\n            <div>\n                <span style=\"font-size: 15px;\">Location</span>\n                <span style=\"font-size: 10px; color: #696;\">($x, $y)</span>\n            </div>\n        </div>\n        "},"id":"b5228dc9-cea9-4911-8d4f-ce14b8500f4e","type":"HoverTool"},{"attributes":{"dimension":1,"plot":{"id":"c3d5ed98-b824-4688-8318-b4a5ce980f16","subtype":"Figure","type":"Plot"},"ticker":{"id":"16cccf48-7150-4b41-b12f-fbd729d8b0d1","type":"BasicTicker"}},"id":"e0b3e208-a55b-4d74-809f-bf4db59c0328","type":"Grid"}],"root_ids":["c3d5ed98-b824-4688-8318-b4a5ce980f16"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"485d68aa-54db-4dae-b64c-fdbf354301e5","elementid":"cf447906-1ba1-43c9-a43d-459ef1777b4d","modelid":"c3d5ed98-b824-4688-8318-b4a5ce980f16"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
