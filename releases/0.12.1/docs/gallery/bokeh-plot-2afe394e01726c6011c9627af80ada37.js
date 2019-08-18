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
      };var element = document.getElementById("8bb21f2d-225a-478c-bce1-56b780dc4055");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8bb21f2d-225a-478c-bce1-56b780dc4055' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"524a5112-3d07-4e7f-8535-7612fb792071":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"c68a21af-ccc3-40b3-a825-3abd557b3bd5","type":"Title"},{"attributes":{},"id":"3f68e489-2223-4060-a866-e84793563507","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3a4b11bd-af89-44a4-961a-7700e7467fe1","type":"ColumnDataSource"},"glyph":{"id":"594fd5e1-7721-4f52-8c33-2b9763b624e8","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"bb8ee4f7-9267-4cfb-8bec-2ac3bd69d386","type":"Rect"},"selection_glyph":null},"id":"9f5f2816-3c09-4cb7-9a0e-6aa8d1b19c42","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"3638aad3-628a-4fbe-9660-eec923930ba2","type":"Segment"},{"attributes":{"formatter":{"id":"b191e1c8-1cec-4435-8e67-de117855119e","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"6790b6c2-ca80-4443-b9d2-75f2e13ec50a","subtype":"Figure","type":"Plot"},"ticker":{"id":"02abebbf-b635-4e20-9517-42b9caa7ea6b","type":"CategoricalTicker"}},"id":"7e1bc1c7-b0c7-499f-ac83-1f909861a90d","type":"CategoricalAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"bb8ee4f7-9267-4cfb-8bec-2ac3bd69d386","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[-2.6337984056480295,-3.0232263842979132,-1.781117482181445,-1.286835786907,-0.7109519070317545,-0.4455082561887731]}},"id":"351704a2-ae95-4bcc-8455-79fbd526e59c","type":"ColumnDataSource"},{"attributes":{},"id":"b191e1c8-1cec-4435-8e67-de117855119e","type":"CategoricalTickFormatter"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[2.819480674370972,2.6685195504326473,3.742320530561096,3.468610208544515,4.29780036203687,4.382233377149],"y1":[0.7096779887471387,0.8005515345515397,1.680411972643466,1.685317960250197,2.6216697675801797,2.7350848724013703]}},"id":"777b4b16-4b36-4ead-a4ef-b2675fd36b37","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3c653739-9d54-4277-9d70-5a249144ad65","type":"Rect"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"a7833798-310c-4752-b025-dca834be3570","type":"Segment"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","b","c","d","e","f"],"y":[2.819480674370972,2.6685195504326473,3.742320530561096,3.468610208544515,4.29780036203687,4.382233377149]}},"id":"7bdd5bb7-5819-40a5-a803-e71090dfc354","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"7bdd5bb7-5819-40a5-a803-e71090dfc354","type":"ColumnDataSource"},"glyph":{"id":"3c653739-9d54-4277-9d70-5a249144ad65","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"b62f63ae-15f8-4772-beb3-f9fcb6b4572a","type":"Rect"},"selection_glyph":null},"id":"ea9d5460-1805-4613-b543-9bdfd3a80c19","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"field":"height","units":"data"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"0f6912de-fb0b-4ca9-be93-936eae51e0c5","type":"Rect"},{"attributes":{"data_source":{"id":"26c113e0-0103-42e5-ae6d-02e0c3e8a36e","type":"ColumnDataSource"},"glyph":{"id":"caa5b018-3ce8-4cc4-8d6a-c91801b3dba0","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"2ac68049-7ec5-48b2-9b03-071d4a22f23f","type":"Circle"},"selection_glyph":null},"id":"250acc9a-dcd6-4eb7-9843-df20fc7ddff3","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":["a","a","a","b","c","d","d","d","d","e","f","f","f","f","f","f"],"y":[2.9111172042723155,3.015270046449592,3.202042846764436,-3.2025639196197395,-2.4452853095016813,-2.0183502602676913,4.173880502209123,-1.3771416145152457,-1.458715819312164,-0.7564817314768999,-1.3016822620945536,-1.6359047108485152,-0.6073206116298291,-0.6719503873731592,-0.5099273517535048,-0.7097782700551973]}},"id":"26c113e0-0103-42e5-ae6d-02e0c3e8a36e","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"ad720b33-ba35-4c53-9f79-262e8e636ca0","type":"ColumnDataSource"},"glyph":{"id":"df6544d5-7ce4-47c6-8139-8d2e635ded55","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"3638aad3-628a-4fbe-9660-eec923930ba2","type":"Segment"},"selection_glyph":null},"id":"86624f74-9c73-46c6-973b-8403e895e6c9","type":"GlyphRenderer"},{"attributes":{},"id":"cdf9a3ff-9446-44ef-8707-badf2be51789","type":"BasicTickFormatter"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"2eaa1187-2fa7-42b4-9aa2-e726d8c1cfea","type":"Segment"},{"attributes":{"fill_color":{"value":"#3B8686"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"594fd5e1-7721-4f52-8c33-2b9763b624e8","type":"Rect"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"7e1bc1c7-b0c7-499f-ac83-1f909861a90d","type":"CategoricalAxis"}],"left":[{"id":"1b7c641b-9181-4b7a-a046-35ebde8ff13c","type":"LinearAxis"}],"renderers":[{"id":"7e1bc1c7-b0c7-499f-ac83-1f909861a90d","type":"CategoricalAxis"},{"id":"3e62ad58-ea25-4bf8-9a9c-bbb390b00221","type":"Grid"},{"id":"1b7c641b-9181-4b7a-a046-35ebde8ff13c","type":"LinearAxis"},{"id":"0b28e09e-2b3a-4afd-bf17-6e74fb4030cc","type":"Grid"},{"id":"66154b7e-8866-4939-b06d-848d947768d3","type":"GlyphRenderer"},{"id":"86624f74-9c73-46c6-973b-8403e895e6c9","type":"GlyphRenderer"},{"id":"59efe84b-e401-4641-8045-7a54f71c8fdf","type":"GlyphRenderer"},{"id":"9f5f2816-3c09-4cb7-9a0e-6aa8d1b19c42","type":"GlyphRenderer"},{"id":"d93ce1f6-962b-49ac-8693-a98e66ba2109","type":"GlyphRenderer"},{"id":"ea9d5460-1805-4613-b543-9bdfd3a80c19","type":"GlyphRenderer"},{"id":"250acc9a-dcd6-4eb7-9843-df20fc7ddff3","type":"GlyphRenderer"}],"title":{"id":"c68a21af-ccc3-40b3-a825-3abd557b3bd5","type":"Title"},"tool_events":{"id":"d0e863f7-5aa8-4d34-b2cd-e7a2ed7bb6bc","type":"ToolEvents"},"toolbar":{"id":"17224b12-a598-49d6-adad-bc4dfe757b6e","type":"Toolbar"},"x_range":{"id":"2ae02ef2-dec0-4693-8897-25a811641285","type":"FactorRange"},"y_range":{"id":"939fd254-647c-4d48-a730-fc5696ba2152","type":"DataRange1d"}},"id":"6790b6c2-ca80-4443-b9d2-75f2e13ec50a","subtype":"Figure","type":"Plot"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"6790b6c2-ca80-4443-b9d2-75f2e13ec50a","subtype":"Figure","type":"Plot"},"ticker":{"id":"02abebbf-b635-4e20-9517-42b9caa7ea6b","type":"CategoricalTicker"}},"id":"3e62ad58-ea25-4bf8-9a9c-bbb390b00221","type":"Grid"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"6790b6c2-ca80-4443-b9d2-75f2e13ec50a","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f68e489-2223-4060-a866-e84793563507","type":"BasicTicker"}},"id":"0b28e09e-2b3a-4afd-bf17-6e74fb4030cc","type":"Grid"},{"attributes":{},"id":"02abebbf-b635-4e20-9517-42b9caa7ea6b","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[0.6357890479676825,0.7584848450795679,0.6272520446207652,0.5863907468246339,0.6593320393767479,0.6770511011351572],"x":["a","b","c","d","e","f"],"y":[0.39178346476329745,0.42130911201175575,1.3667859503330835,1.3921225868378801,2.2920037478918056,2.3965593218337915]}},"id":"e05913bb-742d-454e-a5c3-8a2620318b10","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"777b4b16-4b36-4ead-a4ef-b2675fd36b37","type":"ColumnDataSource"},"glyph":{"id":"2eaa1187-2fa7-42b4-9aa2-e726d8c1cfea","type":"Segment"},"hover_glyph":null,"nonselection_glyph":{"id":"a7833798-310c-4752-b025-dca834be3570","type":"Segment"},"selection_glyph":null},"id":"66154b7e-8866-4939-b06d-848d947768d3","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"351704a2-ae95-4bcc-8455-79fbd526e59c","type":"ColumnDataSource"},"glyph":{"id":"c0a78030-8627-43cc-9d72-33651d27bc74","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"5d2c1158-9a9a-4ade-8755-21854ad42fee","type":"Rect"},"selection_glyph":null},"id":"d93ce1f6-962b-49ac-8693-a98e66ba2109","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d2c1158-9a9a-4ade-8755-21854ad42fee","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","height"],"data":{"height":[0.7707460757815398,0.7710263224602133,0.7573597373091991,0.602470752038245,0.6737166304680258,0.5951861503009002],"x":["a","b","c","d","e","f"],"y":[-0.3114840971113137,-0.34344647175813486,0.6744800593681013,0.7976918374064408,1.625479412969419,1.760440696115763]}},"id":"3a4b11bd-af89-44a4-961a-7700e7467fe1","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"939fd254-647c-4d48-a730-fc5696ba2152","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ac68049-7ec5-48b2-9b03-071d4a22f23f","type":"Circle"},{"attributes":{},"id":"d0e863f7-5aa8-4d34-b2cd-e7a2ed7bb6bc","type":"ToolEvents"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1e0121b1-7b33-4a69-966c-f441eaab9349","type":"SaveTool"}]},"id":"17224b12-a598-49d6-adad-bc4dfe757b6e","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y1","y0","x0","x1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":[-2.6337984056480295,-3.0232263842979132,-1.781117482181445,-1.286835786907,-0.7109519070317545,-0.4455082561887731],"y1":[-0.6968571350020836,-0.7289596329882415,0.2958001907135017,0.49645646138731825,1.288621097735406,1.462847620965313]}},"id":"ad720b33-ba35-4c53-9f79-262e8e636ca0","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"c0a78030-8627-43cc-9d72-33651d27bc74","type":"Rect"},{"attributes":{"fill_color":{"value":"#E08E79"},"height":{"field":"height","units":"data"},"line_width":{"value":2},"width":{"units":"data","value":0.7},"x":{"field":"x"},"y":{"field":"y"}},"id":"d19a0fe3-2be4-45fd-9bdd-f0188cb9448a","type":"Rect"},{"attributes":{"plot":{"id":"6790b6c2-ca80-4443-b9d2-75f2e13ec50a","subtype":"Figure","type":"Plot"}},"id":"1e0121b1-7b33-4a69-966c-f441eaab9349","type":"SaveTool"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"2ae02ef2-dec0-4693-8897-25a811641285","type":"FactorRange"},{"attributes":{"data_source":{"id":"e05913bb-742d-454e-a5c3-8a2620318b10","type":"ColumnDataSource"},"glyph":{"id":"d19a0fe3-2be4-45fd-9bdd-f0188cb9448a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":{"id":"0f6912de-fb0b-4ca9-be93-936eae51e0c5","type":"Rect"},"selection_glyph":null},"id":"59efe84b-e401-4641-8045-7a54f71c8fdf","type":"GlyphRenderer"},{"attributes":{"line_width":{"value":2},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"df6544d5-7ce4-47c6-8139-8d2e635ded55","type":"Segment"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"caa5b018-3ce8-4cc4-8d6a-c91801b3dba0","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"b62f63ae-15f8-4772-beb3-f9fcb6b4572a","type":"Rect"},{"attributes":{"formatter":{"id":"cdf9a3ff-9446-44ef-8707-badf2be51789","type":"BasicTickFormatter"},"plot":{"id":"6790b6c2-ca80-4443-b9d2-75f2e13ec50a","subtype":"Figure","type":"Plot"},"ticker":{"id":"3f68e489-2223-4060-a866-e84793563507","type":"BasicTicker"}},"id":"1b7c641b-9181-4b7a-a046-35ebde8ff13c","type":"LinearAxis"}],"root_ids":["6790b6c2-ca80-4443-b9d2-75f2e13ec50a"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"524a5112-3d07-4e7f-8535-7612fb792071","elementid":"8bb21f2d-225a-478c-bce1-56b780dc4055","modelid":"6790b6c2-ca80-4443-b9d2-75f2e13ec50a"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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