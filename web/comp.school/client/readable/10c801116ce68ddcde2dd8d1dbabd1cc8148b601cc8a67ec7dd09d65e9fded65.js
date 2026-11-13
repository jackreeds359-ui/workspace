import { v as p, w as e, x as n } from "./AppRoutes-Br4afREO.js";
import "./react-vendor-BK1G6oO1.js";
import "./index-DjyiOHey.js";
import "./ui-components-DeMDYLzO.js";
import "./GameNotebook-b0Qw2wzd.js";
import "./radix-ui-Vw-YFQN8.js";
import "./FdeQuiz-QJ8t5VNa.js";
import "./revision-content-CLnFOyQ7.js";
import "./action-styles-DWMwPIR0.js";
import "./proxy-DGk2Wawc.js";
import "./keyword-deck-Bo8inXG8.js";
import "./keyword-flashcards-Ha6Msavb.js";
import "./use-cover-art-CyGvgy9q.js";
import "./AquaticSortGame-BYy2pwqM.js";
import "./DefragGame-Cbp3Z9Xu.js";
import "./LawAndOrderGame-DsjUFNJ3.js";
import "./index-B24ohNs7.js";
import "./NetworkBuildGame-CzKkAyEJ.js";
import "./network-build-z_ixRQe6.js";
import "./immersive-picker-PA4Q0OWd.js";
import "./helpers-DmEFZcxj.js";
import "./NetworkTraceGame-Qz8SQ8Dr.js";
import "./AddressArcadeGame-DPEl4ZPp.js";
import "./keyword-text-BtYtr9f7.js";
import "./SignalMapGame-CqZijLu9.js";
import "./ProtocolPostGame-CYb8FD6Y.js";
import "./SpecItGame-4kZ8fSy0.js";
import "./UnderAttackGame-DQTs04Tm.js";
import "./SqueezeGame-BfrJr2Ri.js";
import "./UpgradeBayGame-C8dsS5A0.js";
import "./OsControlRoomGame-Os9AAYzi.js";
import "./index-DODcXJEq.js";
import "./HiddenComputersGame-Bjib9LyZ.js";
import "./SafeCrackerGame-COhLy2i9.js";
import "./SoundStudioGame-C-zDgI2b.js";
import "./SecretAgentsGame-CFNZoJLR.js";
import "./BinaryBakeryGame-BXeXrTUn.js";
import "./PixelStudioGame-B8Y1iEuP.js";
import "./LineByLineGame-Bcc5iq7z.js";
import "./GateWorksGame-vDTeqFB1.js";
import "./BoxOfficeGame-DETNqaK-.js";
import "./TranslatorLabGame-CCM5PaWg.js";
async function X(o, i) {
  const { question: r } = o,
    m = p(o, i),
    [t] = await e({
      parentQuestion: r.parent_question ?? 0,
      paperId: o.source.paperId,
      subQuestions: [
        {
          questionId: r.question_id,
          ref: n(o.source.paperId, r),
          content: r.content,
          answer: r.answer,
          marks: r.marks,
          rawAnswer: m,
          studentAnswer: m,
          commandWord: r.command_word ?? "",
          responseMode: "text",
          drawingPngBase64: null,
        },
      ],
    });
  if (!t) throw new Error("AI marking returned no mark.");
  return {
    mark: Math.max(0, Math.min(o.marks, Math.round(t.mark))),
    verdict: t.verdict ?? "",
    rationale: t.rationale ?? "",
    credited: t.whatWasCredited ?? [],
    missing: t.whatWasMissing ?? [],
    assessedText: i.trim(),
  };
}
export { X as markTellMeWhyWithAi };
