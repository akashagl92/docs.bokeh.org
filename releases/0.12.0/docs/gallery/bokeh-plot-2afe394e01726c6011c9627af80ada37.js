document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined") {
        window._bokeh_onload_callbacks = [];
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
      };var element = document.getElementById("91a71b2f-3f4e-489b-8929-0d02920829bc");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91a71b2f-3f4e-489b-8929-0d02920829bc' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.0.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"df17c5d2-2da7-4401-bcc0-f4ca5b4be0f8":{"roots":{"references":[{"attributes":{},"id":"c22c3b65-c48c-4e11-822b-1d44324c575d","type":"BasicTicker"},{"attributes":{"data_source":{"id":"78c2b03e-3c9e-4d97-bf31-ad84d2a67c25","type":"ColumnDataSource"},"glyph":{"id":"dba645d4-41d8-4e1b-bec1-9d500dbeb9b9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"dee360b1-a507-4945-aaff-1e03cc0f6610","type":"Rect"},"selection_glyph":null},"id":"30b0326a-34bb-42e3-8b91-11c4c1d6fba6","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"02f04ce9-b632-4c36-b03d-668f444d7be6","type":"ColumnDataSource"},"glyph":{"id":"25e6c5ac-0e79-4cae-9bba-263cecce2e9b","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"1b7e55c6-02b3-434e-997d-70bff42eebbd","type":"Rect"},"selection_glyph":null},"id":"a9ff8122-eaa1-42b9-a282-0016d7a0ccdc","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"756e864b-6648-40b0-a01e-13f5bd393340","type":"SaveTool"}]},"id":"19f1a6b1-4dc1-4e04-ac35-2c255de24d4f","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[-2.5868029059364215,-2.4684374046009694,-1.7356074325610407,-1.3339500726197464,-0.4964586734296257,-0.7050275929981291],"y1":[-0.6768074656833332,-0.5862916853662701,0.3182618763883506,0.29771911545127805,1.4228813265183207,1.1513899848677034]}},"id":"229030b2-f9bf-408b-a4a3-8d3390b4f84a","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"b5fefeea-f23d-4706-b769-855784c02af3","type":"Segment"},{"attributes":{"data_source":{"id":"e4f59845-0f8a-41d3-8fea-a9bff9020170","type":"ColumnDataSource"},"glyph":{"id":"7a865578-ea44-446e-b56c-b2c6be29fad2","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"f8380b32-ba76-4025-b76d-bdb407f483f5","type":"Segment"},"selection_glyph":null},"id":"ea855863-c23c-45dd-80f7-4e4dda301fc0","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[0.7082536819749391,0.638769233846401,0.6185260710613323,0.7649842975540778,0.6798128461262651,0.7644866148830833],"x":["a","b","c","d","e","f"],"y":[0.3724795200070062,0.34908751053366227,1.3854226225553918,1.3552662898756123,2.3625349034204857,2.4077217809192115]}},"id":"78c2b03e-3c9e-4d97-bf31-ad84d2a67c25","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"dee360b1-a507-4945-aaff-1e03cc0f6610","type":"Rect"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"f8380b32-ba76-4025-b76d-bdb407f483f5","type":"Segment"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5beee905-f612-4364-8f1a-f03a0555cfdc","type":"Rect"},{"attributes":{"formatter":{"id":"45e44081-ad70-4e51-a265-0f1b69cd0600","type":"BasicTickFormatter"},"plot":{"id":"ecbe72b8-e323-4c8f-8114-5665c34ea1c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"c22c3b65-c48c-4e11-822b-1d44324c575d","type":"BasicTicker"}},"id":"e622b259-acda-41b6-a545-9089f6146288","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"8ecdec78-2e07-41e2-b780-3f21347e3763","type":"Rect"},{"attributes":{"fill_color":{"value":"#E08E79"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"dba645d4-41d8-4e1b-bec1-9d500dbeb9b9","type":"Rect"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7cd7b077-9f6b-44da-8d7c-0fef84726b7a","type":"Segment"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["b","b","e"],"y":[-2.7243954019661087,-2.643477308363027,-0.9225232051236332]}},"id":"76fe9a96-7905-4890-ae48-06378f66bb47","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"ecbe72b8-e323-4c8f-8114-5665c34ea1c2","subtype":"Figure","type":"Plot"}},"id":"756e864b-6648-40b0-a01e-13f5bd393340","type":"SaveTool"},{"attributes":{"callback":null},"id":"8fd809e7-c679-453a-8c61-3f9986701ed6","type":"DataRange1d"},{"attributes":{},"id":"fdab1d64-8c5e-4ca2-a9ce-4cd54bab51c1","type":"CategoricalTickFormatter"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"ecbe72b8-e323-4c8f-8114-5665c34ea1c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"c22c3b65-c48c-4e11-822b-1d44324c575d","type":"BasicTicker"}},"id":"36ad6695-056a-402f-995b-4911de9aced1","type":"Grid"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"ab35de72-f244-4b4d-83af-5610f8c3714f","type":"CategoricalAxis"}],"left":[{"id":"e622b259-acda-41b6-a545-9089f6146288","type":"LinearAxis"}],"renderers":[{"id":"ab35de72-f244-4b4d-83af-5610f8c3714f","type":"CategoricalAxis"},{"id":"15bc4a54-fa67-4664-9117-eed221348de3","type":"Grid"},{"id":"e622b259-acda-41b6-a545-9089f6146288","type":"LinearAxis"},{"id":"36ad6695-056a-402f-995b-4911de9aced1","type":"Grid"},{"id":"ea855863-c23c-45dd-80f7-4e4dda301fc0","type":"GlyphRenderer"},{"id":"172e09ac-0c87-43bb-9156-459b3b582044","type":"GlyphRenderer"},{"id":"30b0326a-34bb-42e3-8b91-11c4c1d6fba6","type":"GlyphRenderer"},{"id":"a9ff8122-eaa1-42b9-a282-0016d7a0ccdc","type":"GlyphRenderer"},{"id":"91374903-c914-45e2-9133-942812f7bb13","type":"GlyphRenderer"},{"id":"dc8c601a-9863-4cc2-aec6-4271b414fa79","type":"GlyphRenderer"},{"id":"737f44c8-14c0-43c7-8098-03c55740feb1","type":"GlyphRenderer"}],"title":{"id":"7646f06c-227e-4dfc-8c04-1dd7efb02d03","type":"Title"},"tool_events":{"id":"343740cb-26b8-4a44-bd6c-b12fc4625d88","type":"ToolEvents"},"toolbar":{"id":"19f1a6b1-4dc1-4e04-ac35-2c255de24d4f","type":"Toolbar"},"x_range":{"id":"2046ff13-34bd-4b06-bb36-819917454284","type":"FactorRange"},"y_range":{"id":"8fd809e7-c679-453a-8c61-3f9986701ed6","type":"DataRange1d"}},"id":"ecbe72b8-e323-4c8f-8114-5665c34ea1c2","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#3B8686"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"25e6c5ac-0e79-4cae-9bba-263cecce2e9b","type":"Rect"},{"attributes":{"formatter":{"id":"fdab1d64-8c5e-4ca2-a9ce-4cd54bab51c1","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"ecbe72b8-e323-4c8f-8114-5665c34ea1c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a2405e7-b7be-4444-8642-d9856f1502e2","type":"CategoricalTicker"}},"id":"ab35de72-f244-4b4d-83af-5610f8c3714f","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"76fe9a96-7905-4890-ae48-06378f66bb47","type":"ColumnDataSource"},"glyph":{"id":"5ba7932f-7294-48c3-8be3-058e68b38c60","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"93f82f75-d608-4b18-985b-0235efec7ff8","type":"Circle"},"selection_glyph":null},"id":"737f44c8-14c0-43c7-8098-03c55740feb1","type":"GlyphRenderer"},{"attributes":{},"id":"343740cb-26b8-4a44-bd6c-b12fc4625d88","type":"ToolEvents"},{"attributes":{},"id":"8a2405e7-b7be-4444-8642-d9856f1502e2","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[0.6951601447028698,0.6159945789767318,0.7578977106363752,0.6750550256472954,0.5997471538390324,0.8740884886099667],"x":["a","b","c","d","e","f"],"y":[-0.32922739333189827,-0.27829439587790417,0.6972107317065381,0.6352466282749257,1.7227549034378369,1.5884342291726867]}},"id":"02f04ce9-b632-4c36-b03d-668f444d7be6","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":""},"id":"7646f06c-227e-4dfc-8c04-1dd7efb02d03","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"1b7e55c6-02b3-434e-997d-70bff42eebbd","type":"Rect"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"28a28f66-8ec4-4301-a7a1-9cb5fd745868","type":"Rect"},{"attributes":{},"id":"45e44081-ad70-4e51-a265-0f1b69cd0600","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"2528ea07-03c3-4574-b8e6-3709ec0ade2d","type":"ColumnDataSource"},"glyph":{"id":"8ecdec78-2e07-41e2-b780-3f21347e3763","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"28a28f66-8ec4-4301-a7a1-9cb5fd745868","type":"Rect"},"selection_glyph":null},"id":"dc8c601a-9863-4cc2-aec6-4271b414fa79","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[2.343033571373184,2.5009710490387245,3.725774086430747,3.540053646484257,4.4682424560594125,4.435423803179084]}},"id":"2528ea07-03c3-4574-b8e6-3709ec0ade2d","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93f82f75-d608-4b18-985b-0235efec7ff8","type":"Circle"},{"attributes":{"data_source":{"id":"229030b2-f9bf-408b-a4a3-8d3390b4f84a","type":"ColumnDataSource"},"glyph":{"id":"7cd7b077-9f6b-44da-8d7c-0fef84726b7a","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"b5fefeea-f23d-4706-b769-855784c02af3","type":"Segment"},"selection_glyph":null},"id":"172e09ac-0c87-43bb-9156-459b3b582044","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"5ba7932f-7294-48c3-8be3-058e68b38c60","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"ecbe72b8-e323-4c8f-8114-5665c34ea1c2","subtype":"Figure","type":"Plot"},"ticker":{"id":"8a2405e7-b7be-4444-8642-d9856f1502e2","type":"CategoricalTicker"}},"id":"15bc4a54-fa67-4664-9117-eed221348de3","type":"Grid"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[2.343033571373184,2.5009710490387245,3.725774086430747,3.540053646484257,4.4682424560594125,4.435423803179084],"y1":[0.7266063609944757,0.6684721274568628,1.694685658086058,1.7377584386526512,2.7024413264836182,2.7899650883607534]}},"id":"e4f59845-0f8a-41d3-8fea-a9bff9020170","type":"ColumnDataSource"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"7a865578-ea44-446e-b56c-b2c6be29fad2","type":"Segment"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"2046ff13-34bd-4b06-bb36-819917454284","type":"FactorRange"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[-2.5868029059364215,-2.4684374046009694,-1.7356074325610407,-1.3339500726197464,-0.4964586734296257,-0.7050275929981291]}},"id":"3c4dc4a2-7abc-4531-b2e0-9bdbc4147243","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"f20e8e82-a73f-4f00-b9c7-d5b0a96bfb1f","type":"Rect"},{"attributes":{"data_source":{"id":"3c4dc4a2-7abc-4531-b2e0-9bdbc4147243","type":"ColumnDataSource"},"glyph":{"id":"5beee905-f612-4364-8f1a-f03a0555cfdc","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"f20e8e82-a73f-4f00-b9c7-d5b0a96bfb1f","type":"Rect"},"selection_glyph":null},"id":"91374903-c914-45e2-9133-942812f7bb13","type":"GlyphRenderer"}],"root_ids":["ecbe72b8-e323-4c8f-8114-5665c34ea1c2"]},"title":"Bokeh Application","version":"0.12.0.9128"}};
              var render_items = [{"docid":"df17c5d2-2da7-4401-bcc0-f4ca5b4be0f8","elementid":"91a71b2f-3f4e-489b-8929-0d02920829bc","modelid":"ecbe72b8-e323-4c8f-8114-5665c34ea1c2"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.0.min.css");
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