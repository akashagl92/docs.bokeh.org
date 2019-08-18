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
      };var element = document.getElementById("8d21e315-1baf-4d3b-aaf4-ebe3e6b874aa");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8d21e315-1baf-4d3b-aaf4-ebe3e6b874aa' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"fad6d785-615d-4206-bd89-1665ec8dc54c":{"roots":{"references":[{"attributes":{"plot":{"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"}},"id":"e342d490-0eac-4434-a248-c5ea9746023e","type":"ResetTool"},{"attributes":{},"id":"b084a86b-0f08-4925-84b6-52299912b365","type":"BasicTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#08519c"},"height":{"units":"data","value":0.95},"line_color":{"value":"#08519c"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d95f9337-591d-4258-ac7c-54f692348796","type":"Rect"},{"attributes":{"plot":{"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"}},"id":"7c0d2624-d3e5-4002-8c6b-5738262b459b","type":"SaveTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#c6dbef"},"height":{"units":"data","value":0.95},"line_color":{"value":"#c6dbef"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e134ae3-80b9-4486-8969-aa64b11826c3","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(5.7, 6.8]"}],"fruit_count":["(5.7, 6.8]"],"values":[6],"x":["pears"],"y":[1]}},"id":"5ba447f8-cb52-4ae3-b752-fdf6e4e88c80","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#9ecae1"},"height":{"units":"data","value":0.95},"line_color":{"value":"#9ecae1"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0637d2e7-27f0-4c96-b0f5-398e1c44f96e","type":"Rect"},{"attributes":{"axis_label":"fruit","formatter":{"id":"8166396f-cbee-4c5d-9ecf-58a448973afa","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"},"ticker":{"id":"4c7680ed-31cd-45c6-875a-f647e018b3de","type":"CategoricalTicker"}},"id":"096b3d2d-57f8-41b3-835a-216746545c7f","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"d3eeeb57-9869-4afe-8eb5-1a236be8fab3","type":"ColumnDataSource"},"glyph":{"id":"d95f9337-591d-4258-ac7c-54f692348796","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a420d284-8175-419d-a4b3-5d1da29ceff8","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["apples","bananas","pears"]},"id":"982b2843-a08b-4c71-abc4-bfe1ce65fd2b","type":"FactorRange"},{"attributes":{"callback":null,"end":3.77,"start":0.22999999999999998},"id":"a25e33ad-9f83-4d5d-9ff8-f8434e36520d","type":"Range1d"},{"attributes":{"plot":{"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"}},"id":"0364a2d6-27f8-4d74-b1f0-462ccf79bd3a","type":"PanTool"},{"attributes":{},"id":"8166396f-cbee-4c5d-9ecf-58a448973afa","type":"CategoricalTickFormatter"},{"attributes":{},"id":"4c7680ed-31cd-45c6-875a-f647e018b3de","type":"CategoricalTicker"},{"attributes":{"axis_label":"sample","formatter":{"id":"b084a86b-0f08-4925-84b6-52299912b365","type":"BasicTickFormatter"},"plot":{"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"},"ticker":{"id":"997f4f9b-527c-41a0-9964-b36550d4f42d","type":"BasicTicker"}},"id":"67d1a5f8-a59e-4e22-bbc5-844daa0df9d0","type":"LinearAxis"},{"attributes":{"below":[{"id":"096b3d2d-57f8-41b3-835a-216746545c7f","type":"CategoricalAxis"}],"height":400,"left":[{"id":"67d1a5f8-a59e-4e22-bbc5-844daa0df9d0","type":"LinearAxis"}],"renderers":[{"id":"6e2c5c8f-c6ac-4b81-9f8d-edd8ba06eb0b","type":"BoxAnnotation"},{"id":"a420d284-8175-419d-a4b3-5d1da29ceff8","type":"GlyphRenderer"},{"id":"b16c2d6d-f1e1-4dc6-99dd-0ba708474194","type":"GlyphRenderer"},{"id":"7306f33f-dd9b-4f4c-8610-71b27ca93762","type":"GlyphRenderer"},{"id":"195ad12e-d4c5-4eed-8b6b-30aa2d9ca9ad","type":"GlyphRenderer"},{"id":"a479f692-632f-4c44-b230-7ef56b38eb2f","type":"GlyphRenderer"},{"id":"ccb30ef3-6261-4014-ac6a-663556580c81","type":"Legend"},{"id":"096b3d2d-57f8-41b3-835a-216746545c7f","type":"CategoricalAxis"},{"id":"67d1a5f8-a59e-4e22-bbc5-844daa0df9d0","type":"LinearAxis"}],"title":{"id":"1827d75a-0f1c-49d9-85dd-5b3bd3d8fc3e","type":"Title"},"tool_events":{"id":"ba6b0db8-400d-4436-b404-114c3320303d","type":"ToolEvents"},"toolbar":{"id":"844f28e0-274d-4eb4-af33-f3e4eb7f59cf","type":"Toolbar"},"width":400,"x_mapper_type":"auto","x_range":{"id":"982b2843-a08b-4c71-abc4-bfe1ce65fd2b","type":"FactorRange"},"y_mapper_type":"auto","y_range":{"id":"a25e33ad-9f83-4d5d-9ff8-f8434e36520d","type":"Range1d"}},"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"},{"attributes":{"overlay":{"id":"6e2c5c8f-c6ac-4b81-9f8d-edd8ba06eb0b","type":"BoxAnnotation"},"plot":{"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"}},"id":"ad80c438-828f-460f-a2cf-8ad97231820c","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6e2c5c8f-c6ac-4b81-9f8d-edd8ba06eb0b","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":"Fruits"},"id":"1827d75a-0f1c-49d9-85dd-5b3bd3d8fc3e","type":"Title"},{"attributes":{"plot":{"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"}},"id":"18e2efe1-d66c-4734-8c54-3911c2e7a6e3","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"7262936e-38d2-40e9-b1e8-2cc3a3236ac3","type":"ColumnDataSource"},"glyph":{"id":"a032f57b-a42d-4709-a5f4-e728ed681d1b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"7306f33f-dd9b-4f4c-8610-71b27ca93762","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(6.8, 8]"}],"fruit_count":["(6.8, 8]"],"values":[8],"x":["apples"],"y":[3]}},"id":"d3eeeb57-9869-4afe-8eb5-1a236be8fab3","type":"ColumnDataSource"},{"attributes":{"legends":[["(6.8, 8]",[{"id":"a420d284-8175-419d-a4b3-5d1da29ceff8","type":"GlyphRenderer"}]],["(5.7, 6.8]",[{"id":"b16c2d6d-f1e1-4dc6-99dd-0ba708474194","type":"GlyphRenderer"}]],["(4.5, 5.7]",[{"id":"7306f33f-dd9b-4f4c-8610-71b27ca93762","type":"GlyphRenderer"}]],["(3.3, 4.5]",[{"id":"195ad12e-d4c5-4eed-8b6b-30aa2d9ca9ad","type":"GlyphRenderer"}]],["[1, 2.2]",[{"id":"a479f692-632f-4c44-b230-7ef56b38eb2f","type":"GlyphRenderer"}]]],"location":"top_left","plot":{"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"}},"id":"ccb30ef3-6261-4014-ac6a-663556580c81","type":"Legend"},{"attributes":{"dilate":true,"fill_color":{"value":"#6baed6"},"height":{"units":"data","value":0.95},"line_color":{"value":"#6baed6"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a032f57b-a42d-4709-a5f4-e728ed681d1b","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#3182bd"},"height":{"units":"data","value":0.95},"line_color":{"value":"#3182bd"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"193201a2-4406-4f52-b47d-51f7249aa270","type":"Rect"},{"attributes":{"data_source":{"id":"5ba447f8-cb52-4ae3-b752-fdf6e4e88c80","type":"ColumnDataSource"},"glyph":{"id":"193201a2-4406-4f52-b47d-51f7249aa270","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b16c2d6d-f1e1-4dc6-99dd-0ba708474194","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"},{"fruit_count":"(3.3, 4.5]"}],"fruit_count":["(3.3, 4.5]","(3.3, 4.5]","(3.3, 4.5]"],"values":[4,4,4],"x":["apples","bananas","pears"],"y":[1,3,3]}},"id":"bf9e6eba-0be9-43de-ad8d-6d86aa06189f","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"[1, 2.2]"},{"fruit_count":"[1, 2.2]"}],"fruit_count":["[1, 2.2]","[1, 2.2]"],"values":[1,2],"x":["bananas","bananas"],"y":[1,2]}},"id":"17053470-77d6-4c4b-ae78-ec0813d202a8","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"17053470-77d6-4c4b-ae78-ec0813d202a8","type":"ColumnDataSource"},"glyph":{"id":"4e134ae3-80b9-4486-8969-aa64b11826c3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a479f692-632f-4c44-b230-7ef56b38eb2f","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"dc33458e-6e95-4157-a20f-ba3da073d409","subtype":"Chart","type":"Plot"}},"id":"ff3c3af9-dcab-4521-a33d-83ebbddb4888","type":"HelpTool"},{"attributes":{},"id":"997f4f9b-527c-41a0-9964-b36550d4f42d","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"0364a2d6-27f8-4d74-b1f0-462ccf79bd3a","type":"PanTool"},{"id":"18e2efe1-d66c-4734-8c54-3911c2e7a6e3","type":"WheelZoomTool"},{"id":"ad80c438-828f-460f-a2cf-8ad97231820c","type":"BoxZoomTool"},{"id":"7c0d2624-d3e5-4002-8c6b-5738262b459b","type":"SaveTool"},{"id":"e342d490-0eac-4434-a248-c5ea9746023e","type":"ResetTool"},{"id":"ff3c3af9-dcab-4521-a33d-83ebbddb4888","type":"HelpTool"}]},"id":"844f28e0-274d-4eb4-af33-f3e4eb7f59cf","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"chart_index":[{"fruit_count":"(4.5, 5.7]"},{"fruit_count":"(4.5, 5.7]"}],"fruit_count":["(4.5, 5.7]","(4.5, 5.7]"],"values":[5,5],"x":["apples","pears"],"y":[2,2]}},"id":"7262936e-38d2-40e9-b1e8-2cc3a3236ac3","type":"ColumnDataSource"},{"attributes":{},"id":"ba6b0db8-400d-4436-b404-114c3320303d","type":"ToolEvents"},{"attributes":{"data_source":{"id":"bf9e6eba-0be9-43de-ad8d-6d86aa06189f","type":"ColumnDataSource"},"glyph":{"id":"0637d2e7-27f0-4c96-b0f5-398e1c44f96e","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"195ad12e-d4c5-4eed-8b6b-30aa2d9ca9ad","type":"GlyphRenderer"}],"root_ids":["dc33458e-6e95-4157-a20f-ba3da073d409"]},"title":"Bokeh Application","version":"0.12.2.9747"}};
                  var render_items = [{"docid":"fad6d785-615d-4206-bd89-1665ec8dc54c","elementid":"8d21e315-1baf-4d3b-aaf4-ebe3e6b874aa","modelid":"dc33458e-6e95-4157-a20f-ba3da073d409"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
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