document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
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
      };var element = document.getElementById("f696da86-e344-4add-90f6-f3ceb714545f");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f696da86-e344-4add-90f6-f3ceb714545f' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"bf576e02-fd0e-499d-b704-dc9454f78286":{"roots":{"references":[{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"41dc9677-458b-40a2-ac34-2b71b24071f0","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"}},"id":"6d9f4f48-8d74-4a48-8458-6e709c05b36d","type":"HelpTool"},{"attributes":{"align":"right","background_fill_color":{"value":"#aaaaee"},"plot":null,"text":"Title With Options","text_color":{"value":"orange"},"text_font_size":{"value":"25px"}},"id":"d657c28a-522a-4e74-8b4a-d7cb759a4e6f","type":"Title"},{"attributes":{"data_source":{"id":"78dba0e2-8eab-4a10-8ffe-a4584fc09a02","type":"ColumnDataSource"},"glyph":{"id":"a4b5847f-8679-49c0-8dbd-a76a8f55c7cb","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"22d38e96-474a-4b7a-8b9a-7299c7ed379c","type":"Circle"},"selection_glyph":null},"id":"ed3be1b8-45c5-4c67-8c8e-e0115394f51d","type":"GlyphRenderer"},{"attributes":{},"id":"6a0f1e7f-0f92-4210-832e-3770105a3ebf","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"}},"id":"bc9badd2-d039-4de0-add1-f3e7b07ebbaa","type":"SaveTool"},{"attributes":{"below":[{"id":"e367a558-f5ff-4ee3-9644-4b7f515100a3","type":"LinearAxis"}],"left":[{"id":"9eff8632-0f7d-4c7c-a974-b41ee208c3a1","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"e367a558-f5ff-4ee3-9644-4b7f515100a3","type":"LinearAxis"},{"id":"a95d667e-665e-460e-92b4-982d430d2aa7","type":"Grid"},{"id":"9eff8632-0f7d-4c7c-a974-b41ee208c3a1","type":"LinearAxis"},{"id":"f47ca9ba-d8d0-4bed-89a7-3d6904eb1c6b","type":"Grid"},{"id":"41dc9677-458b-40a2-ac34-2b71b24071f0","type":"BoxAnnotation"},{"id":"ed3be1b8-45c5-4c67-8c8e-e0115394f51d","type":"GlyphRenderer"}],"title":{"id":"d657c28a-522a-4e74-8b4a-d7cb759a4e6f","type":"Title"},"tool_events":{"id":"369be7cf-3f3e-446e-913b-095c446d898f","type":"ToolEvents"},"toolbar":{"id":"703dd210-e1ce-495a-bccb-9e95f7e2a6a3","type":"Toolbar"},"x_range":{"id":"f6448639-761f-4fec-b4ab-e666ff0b659f","type":"DataRange1d"},"y_range":{"id":"614153a5-8888-4b93-af69-2fd1eb27b251","type":"DataRange1d"}},"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"f6448639-761f-4fec-b4ab-e666ff0b659f","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"a4b5847f-8679-49c0-8dbd-a76a8f55c7cb","type":"Circle"},{"attributes":{},"id":"3a538533-ce2e-4836-8b83-5657a65115ea","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2],"y":[3,4]}},"id":"78dba0e2-8eab-4a10-8ffe-a4584fc09a02","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"}},"id":"f5837fe8-4eac-460a-aac1-b58421615d7c","type":"PanTool"},{"attributes":{"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"}},"id":"b362ce25-4922-4fd0-9cd3-c63bfb1282be","type":"ResetTool"},{"attributes":{"callback":null},"id":"614153a5-8888-4b93-af69-2fd1eb27b251","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a538533-ce2e-4836-8b83-5657a65115ea","type":"BasicTicker"}},"id":"f47ca9ba-d8d0-4bed-89a7-3d6904eb1c6b","type":"Grid"},{"attributes":{},"id":"369be7cf-3f3e-446e-913b-095c446d898f","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"f5837fe8-4eac-460a-aac1-b58421615d7c","type":"PanTool"},{"id":"8b9dfe13-3a6b-4fe2-9003-819f1c8d1934","type":"WheelZoomTool"},{"id":"ae2c5a05-4b67-4c52-9cab-01e41c8263c9","type":"BoxZoomTool"},{"id":"bc9badd2-d039-4de0-add1-f3e7b07ebbaa","type":"SaveTool"},{"id":"b362ce25-4922-4fd0-9cd3-c63bfb1282be","type":"ResetTool"},{"id":"6d9f4f48-8d74-4a48-8458-6e709c05b36d","type":"HelpTool"}]},"id":"703dd210-e1ce-495a-bccb-9e95f7e2a6a3","type":"Toolbar"},{"attributes":{"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"},"ticker":{"id":"c44350b9-92c2-493d-94fc-b8cf503d4120","type":"BasicTicker"}},"id":"a95d667e-665e-460e-92b4-982d430d2aa7","type":"Grid"},{"attributes":{"overlay":{"id":"41dc9677-458b-40a2-ac34-2b71b24071f0","type":"BoxAnnotation"},"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"}},"id":"ae2c5a05-4b67-4c52-9cab-01e41c8263c9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"}},"id":"8b9dfe13-3a6b-4fe2-9003-819f1c8d1934","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"a4dcb189-a5d7-41b4-b6bc-73f762ae863a","type":"BasicTickFormatter"},"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a538533-ce2e-4836-8b83-5657a65115ea","type":"BasicTicker"}},"id":"9eff8632-0f7d-4c7c-a974-b41ee208c3a1","type":"LinearAxis"},{"attributes":{},"id":"a4dcb189-a5d7-41b4-b6bc-73f762ae863a","type":"BasicTickFormatter"},{"attributes":{},"id":"c44350b9-92c2-493d-94fc-b8cf503d4120","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"22d38e96-474a-4b7a-8b9a-7299c7ed379c","type":"Circle"},{"attributes":{"formatter":{"id":"6a0f1e7f-0f92-4210-832e-3770105a3ebf","type":"BasicTickFormatter"},"plot":{"id":"cc4ca1bb-793d-470a-b1c4-2887904ae333","subtype":"Figure","type":"Plot"},"ticker":{"id":"c44350b9-92c2-493d-94fc-b8cf503d4120","type":"BasicTicker"}},"id":"e367a558-f5ff-4ee3-9644-4b7f515100a3","type":"LinearAxis"}],"root_ids":["cc4ca1bb-793d-470a-b1c4-2887904ae333"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"bf576e02-fd0e-499d-b704-dc9454f78286","elementid":"f696da86-e344-4add-90f6-f3ceb714545f","modelid":"cc4ca1bb-793d-470a-b1c4-2887904ae333"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
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
});