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
      };var element = document.getElementById("694dfd52-77c8-4987-ad2a-11f297396653");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '694dfd52-77c8-4987-ad2a-11f297396653' but no matching script tag was found. ")
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
                var docs_json = {"65eadcae-a55c-4ebe-9781-7d2b9a6ac561":{"roots":{"references":[{"attributes":{},"id":"8f1c12cf-fbf1-4770-9d48-efe67adaa210","type":"CategoricalScale"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"tqM4riorBcBaBBCXuH4DwE7MgA49Wve/1A7SJv7n/r8qouSVjYXiv0j4b7joT96/","dtype":"float64","shape":[6]}}},"id":"e6803457-3bc4-4264-a6e4-5900c3e4916f","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"e43b9685-20c0-45cb-8d96-b792b3e219d8","type":"Rect"},{"attributes":{"dimension":1,"grid_line_color":{"value":"white"},"grid_line_width":{"value":2},"plot":{"id":"52230df5-ebec-4f83-b0e4-6b26270ef474","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbf97bba-3168-4799-950a-c4887f028ab7","type":"BasicTicker"}},"id":"624883f3-00fd-447f-9d24-9c597b0a01cc","type":"Grid"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"tqM4riorBcBaBBCXuH4DwE7MgA49Wve/1A7SJv7n/r8qouSVjYXiv0j4b7joT96/","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"E1LmT94u57/ufxq1BXbmvxi7TrjLMNU/npu41bY50z9RBPDFnRX2P1Wgiukn0/M/","dtype":"float64","shape":[6]}}},"id":"21138e83-16f0-4a1e-8c02-b68158f70918","type":"ColumnDataSource"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"ebe4d6f7-a25a-4a05-bac5-f95f570aeb6f","type":"VBar"},{"attributes":{"source":{"id":"21138e83-16f0-4a1e-8c02-b68158f70918","type":"ColumnDataSource"}},"id":"b97291a2-2fde-41e2-9272-deb84e3c0385","type":"CDSView"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#E08E79"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"d6e9f4e7-7dd0-482e-a5a9-682757043cfa","type":"VBar"},{"attributes":{"source":{"id":"cdac4826-028f-4571-a5fd-2e09b84a2579","type":"ColumnDataSource"}},"id":"230e813f-865e-43aa-8b06-78271524eda2","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"3f194d6c-41dd-4033-abbe-ec6c6eee4608","type":"Circle"},{"attributes":{},"id":"d7fff68a-88be-4acf-88ba-198cb3b475b4","type":"LinearScale"},{"attributes":{"source":{"id":"ad28e388-194b-45bf-a8ca-a4bb7b1f1bc6","type":"ColumnDataSource"}},"id":"d0b290bf-8d08-4b96-a4a1-ab0f6194486e","type":"CDSView"},{"attributes":{"data_source":{"id":"5fb839e2-4e92-4052-b337-9bf6b269020c","type":"ColumnDataSource"},"glyph":{"id":"3736e210-f0ca-459a-8f3c-373fcc063e40","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"130d19df-6422-41b1-8d70-bc02b5422655","type":"Rect"},"selection_glyph":null,"view":{"id":"6d292046-fe18-42e0-a596-5f305f1670f6","type":"CDSView"}},"id":"f2dbb2c6-2634-421a-a181-889ca83ee5a2","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"ad28e388-194b-45bf-a8ca-a4bb7b1f1bc6","type":"ColumnDataSource"},"glyph":{"id":"c20aa258-e557-4c86-92e4-9e9e9a2cd80a","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ebe4d6f7-a25a-4a05-bac5-f95f570aeb6f","type":"VBar"},"selection_glyph":null,"view":{"id":"d0b290bf-8d08-4b96-a4a1-ab0f6194486e","type":"CDSView"}},"id":"9f30a20c-a7c6-413e-ad2c-792413441b8b","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","a","d","d","d","e","e","e","f"],"y":[-3.2709883014161534,3.1206736635784975,4.233398063947387,-2.2476988482061384,-2.1171312166040983,5.217839599384064,-0.5845269729139577,-1.0288687304158923,4.868740109282481]}},"id":"8f122793-6721-433a-bee4-87c232c7a620","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"#F38630"},"line_color":{"value":"#F38630"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"ccc0c4ff-6ac3-4a0c-a5aa-978b3706ff67","type":"Circle"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"91134acd-281e-4ce9-a118-55ff24bd8042","type":"Segment"},{"attributes":{"source":{"id":"8f122793-6721-433a-bee4-87c232c7a620","type":"ColumnDataSource"}},"id":"7629296f-9356-43ec-a5d9-9cf2eb8fbd26","type":"CDSView"},{"attributes":{"formatter":{"id":"d54c47b5-57cd-440e-b88b-84017478d715","type":"BasicTickFormatter"},"plot":{"id":"52230df5-ebec-4f83-b0e4-6b26270ef474","subtype":"Figure","type":"Plot"},"ticker":{"id":"bbf97bba-3168-4799-950a-c4887f028ab7","type":"BasicTicker"}},"id":"6cb76bde-c112-40fe-85dd-646925aed9da","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"RGNAugxXoL858YrNrVK6vyWu9LARGPA/gvkKa7P/7j+vgFOrWVcAQMV3HNtp8f8/","dtype":"float64","shape":[6]},"top":{"__ndarray__":"E1LmT94u57/ufxq1BXbmvxi7TrjLMNU/npu41bY50z9RBPDFnRX2P1Wgiukn0/M/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"ad28e388-194b-45bf-a8ca-a4bb7b1f1bc6","type":"ColumnDataSource"},{"attributes":{},"id":"96f35bcd-ce46-4099-93ba-93fb90863c15","type":"SaveTool"},{"attributes":{},"id":"bbf97bba-3168-4799-950a-c4887f028ab7","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"110118f4-b30e-4e16-ad67-ac5800d797c3","type":"Rect"},{"attributes":{"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"3736e210-f0ca-459a-8f3c-373fcc063e40","type":"Rect"},{"attributes":{"formatter":{"id":"9582c0d3-8b86-44ae-8625-65adc9923f61","type":"CategoricalTickFormatter"},"major_label_text_font_size":{"value":"12pt"},"plot":{"id":"52230df5-ebec-4f83-b0e4-6b26270ef474","subtype":"Figure","type":"Plot"},"ticker":{"id":"df84f44c-5e9c-4d67-b431-141594da3f0c","type":"CategoricalTicker"}},"id":"78223593-6246-4447-a059-ed820fe2a4ec","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"e6803457-3bc4-4264-a6e4-5900c3e4916f","type":"ColumnDataSource"},"glyph":{"id":"e43b9685-20c0-45cb-8d96-b792b3e219d8","type":"Rect"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"110118f4-b30e-4e16-ad67-ac5800d797c3","type":"Rect"},"selection_glyph":null,"view":{"id":"baf8fc24-f2a6-43d3-8c43-71b4093e297c","type":"CDSView"}},"id":"fbe1f065-4cd2-4edb-9b7e-8565b28656ee","type":"GlyphRenderer"},{"attributes":{"background_fill_color":{"value":"#EFE8E2"},"below":[{"id":"78223593-6246-4447-a059-ed820fe2a4ec","type":"CategoricalAxis"}],"left":[{"id":"6cb76bde-c112-40fe-85dd-646925aed9da","type":"LinearAxis"}],"renderers":[{"id":"78223593-6246-4447-a059-ed820fe2a4ec","type":"CategoricalAxis"},{"id":"2def6d17-4e23-4db7-a425-c132ee2104ac","type":"Grid"},{"id":"6cb76bde-c112-40fe-85dd-646925aed9da","type":"LinearAxis"},{"id":"624883f3-00fd-447f-9d24-9c597b0a01cc","type":"Grid"},{"id":"8679f78c-fd50-48d2-abd7-e971b2bb3f21","type":"GlyphRenderer"},{"id":"3ab9af4b-afc6-40e7-8618-4251aa98abd4","type":"GlyphRenderer"},{"id":"00d23505-ac82-42cd-8b96-477634f4f47d","type":"GlyphRenderer"},{"id":"9f30a20c-a7c6-413e-ad2c-792413441b8b","type":"GlyphRenderer"},{"id":"fbe1f065-4cd2-4edb-9b7e-8565b28656ee","type":"GlyphRenderer"},{"id":"f2dbb2c6-2634-421a-a181-889ca83ee5a2","type":"GlyphRenderer"},{"id":"8662c7b7-0bde-4f72-bd0e-c9faf9d9f2bd","type":"GlyphRenderer"}],"title":{"id":"03db3a95-a33b-46b5-bc17-7748f23b1a81","type":"Title"},"toolbar":{"id":"1776c716-bd89-48b8-b7ff-25e34d9d644a","type":"Toolbar"},"x_range":{"id":"7702b080-035d-4208-8d89-72d05a2f1588","type":"FactorRange"},"x_scale":{"id":"8f1c12cf-fbf1-4770-9d48-efe67adaa210","type":"CategoricalScale"},"y_range":{"id":"7098962f-d401-4eb4-a194-f9718e01815c","type":"DataRange1d"},"y_scale":{"id":"d7fff68a-88be-4acf-88ba-198cb3b475b4","type":"LinearScale"}},"id":"52230df5-ebec-4f83-b0e4-6b26270ef474","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"5fb839e2-4e92-4052-b337-9bf6b269020c","type":"ColumnDataSource"}},"id":"6d292046-fe18-42e0-a596-5f305f1670f6","type":"CDSView"},{"attributes":{},"id":"df84f44c-5e9c-4d67-b431-141594da3f0c","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"96f35bcd-ce46-4099-93ba-93fb90863c15","type":"SaveTool"}]},"id":"1776c716-bd89-48b8-b7ff-25e34d9d644a","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"ae27e6f8-7f74-4dd5-acbd-471bf7a5c27e","type":"Segment"},{"attributes":{},"id":"d54c47b5-57cd-440e-b88b-84017478d715","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","top","bottom"],"data":{"bottom":{"__ndarray__":"xCsX9qnP4T9KZ9qlX7rmPzh2NqhQP/w/EKBDSGCd/D/1c0MTm30FQCgyKGLKRwVA","dtype":"float64","shape":[6]},"top":{"__ndarray__":"RGNAugxXoL858YrNrVK6vyWu9LARGPA/gvkKa7P/7j+vgFOrWVcAQMV3HNtp8f8/","dtype":"float64","shape":[6]},"x":["a","b","c","d","e","f"]}},"id":"cdac4826-028f-4571-a5fd-2e09b84a2579","type":"ColumnDataSource"},{"attributes":{"callback":null,"column_names":["x0","y0","x1","y1"],"data":{"x0":["a","b","c","d","e","f"],"x1":["a","b","c","d","e","f"],"y0":{"__ndarray__":"ItrEl13TA0DNP+Dk7moDQJ9KDI8LFQ9Ac/UgCfMUEEBUT9qt5pQSQJJCHgOOKhNA","dtype":"float64","shape":[6]},"y1":{"__ndarray__":"xCsX9qnP4T9KZ9qlX7rmPzh2NqhQP/w/EKBDSGCd/D/1c0MTm30FQCgyKGLKRwVA","dtype":"float64","shape":[6]}}},"id":"9eb5baf0-6ea2-43a0-8d86-46c7e7df06da","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"7098962f-d401-4eb4-a194-f9718e01815c","type":"DataRange1d"},{"attributes":{"data_source":{"id":"21138e83-16f0-4a1e-8c02-b68158f70918","type":"ColumnDataSource"},"glyph":{"id":"85940fd2-0112-4053-898f-c7fb03db350d","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"d642656f-6e8e-4819-bbe1-90b8a23407a1","type":"Segment"},"selection_glyph":null,"view":{"id":"b97291a2-2fde-41e2-9272-deb84e3c0385","type":"CDSView"}},"id":"3ab9af4b-afc6-40e7-8618-4251aa98abd4","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_color":{"value":"#3B8686"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"c20aa258-e557-4c86-92e4-9e9e9a2cd80a","type":"VBar"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"d642656f-6e8e-4819-bbe1-90b8a23407a1","type":"Segment"},{"attributes":{"grid_line_color":{"value":null},"grid_line_width":{"value":2},"plot":{"id":"52230df5-ebec-4f83-b0e4-6b26270ef474","subtype":"Figure","type":"Plot"},"ticker":{"id":"df84f44c-5e9c-4d67-b431-141594da3f0c","type":"CategoricalTicker"}},"id":"2def6d17-4e23-4db7-a425-c132ee2104ac","type":"Grid"},{"attributes":{},"id":"9582c0d3-8b86-44ae-8625-65adc9923f61","type":"CategoricalTickFormatter"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"85940fd2-0112-4053-898f-c7fb03db350d","type":"Segment"},{"attributes":{"data_source":{"id":"cdac4826-028f-4571-a5fd-2e09b84a2579","type":"ColumnDataSource"},"glyph":{"id":"d6e9f4e7-7dd0-482e-a5a9-682757043cfa","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"c73ae587-8565-4794-8fdf-2274619dcf79","type":"VBar"},"selection_glyph":null,"view":{"id":"230e813f-865e-43aa-8b06-78271524eda2","type":"CDSView"}},"id":"00d23505-ac82-42cd-8b96-477634f4f47d","type":"GlyphRenderer"},{"attributes":{"bottom":{"field":"bottom"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":0.7},"x":{"field":"x"}},"id":"c73ae587-8565-4794-8fdf-2274619dcf79","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.01},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"130d19df-6422-41b1-8d70-bc02b5422655","type":"Rect"},{"attributes":{"plot":null,"text":""},"id":"03db3a95-a33b-46b5-bc17-7748f23b1a81","type":"Title"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f"]},"id":"7702b080-035d-4208-8d89-72d05a2f1588","type":"FactorRange"},{"attributes":{"source":{"id":"e6803457-3bc4-4264-a6e4-5900c3e4916f","type":"ColumnDataSource"}},"id":"baf8fc24-f2a6-43d3-8c43-71b4093e297c","type":"CDSView"},{"attributes":{"data_source":{"id":"9eb5baf0-6ea2-43a0-8d86-46c7e7df06da","type":"ColumnDataSource"},"glyph":{"id":"91134acd-281e-4ce9-a118-55ff24bd8042","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ae27e6f8-7f74-4dd5-acbd-471bf7a5c27e","type":"Segment"},"selection_glyph":null,"view":{"id":"bb287a70-05f4-4dae-ad6b-57d2639c65e5","type":"CDSView"}},"id":"8679f78c-fd50-48d2-abd7-e971b2bb3f21","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":["a","b","c","d","e","f"],"y":{"__ndarray__":"ItrEl13TA0DNP+Dk7moDQJ9KDI8LFQ9Ac/UgCfMUEEBUT9qt5pQSQJJCHgOOKhNA","dtype":"float64","shape":[6]}}},"id":"5fb839e2-4e92-4052-b337-9bf6b269020c","type":"ColumnDataSource"},{"attributes":{"source":{"id":"9eb5baf0-6ea2-43a0-8d86-46c7e7df06da","type":"ColumnDataSource"}},"id":"bb287a70-05f4-4dae-ad6b-57d2639c65e5","type":"CDSView"},{"attributes":{"data_source":{"id":"8f122793-6721-433a-bee4-87c232c7a620","type":"ColumnDataSource"},"glyph":{"id":"ccc0c4ff-6ac3-4a0c-a5aa-978b3706ff67","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3f194d6c-41dd-4033-abbe-ec6c6eee4608","type":"Circle"},"selection_glyph":null,"view":{"id":"7629296f-9356-43ec-a5d9-9cf2eb8fbd26","type":"CDSView"}},"id":"8662c7b7-0bde-4f72-bd0e-c9faf9d9f2bd","type":"GlyphRenderer"}],"root_ids":["52230df5-ebec-4f83-b0e4-6b26270ef474"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"65eadcae-a55c-4ebe-9781-7d2b9a6ac561","elementid":"694dfd52-77c8-4987-ad2a-11f297396653","modelid":"52230df5-ebec-4f83-b0e4-6b26270ef474"}];
                
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
